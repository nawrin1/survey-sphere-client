import Swal from "sweetalert2";
import useAllSurvey from "../../hooks/useAllSurvey";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import { Modal } from "@mui/material";
import { useForm } from "react-hook-form";

const SurveyStatus = () => {
  const [surveys, loading, refetch] = useAllSurvey("");
  const [ress, setRess] = useState([]);
  console.log(surveys, "from survey status");
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.report, "report");
    const stat = { status: "unpublish" };
    console.log("inside handle stat");
    axiosSecure.patch(`/survey/${ress._id}`, stat).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${ress.title} is unpublished!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      const reportUpdate={surveyId:ress._id,title:ress.title,status:ress.status,report:data.report}
      const sData = axiosSecure.post("/unpublish", reportUpdate);
      console.log(sData.data);
    });
  };

  const handleStatus = (ress) => {
    setRess(ress);

    if (ress.status === "publish") {
      document.getElementById("my_modal_1").showModal();
    }

    if (ress.status === "unpublish") {
      const data = { status: "publish" };
      console.log("inside handle stat unpub");
      axiosSecure.patch(`/survey/${ress._id}`, data).then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${ress.title} is published!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
      axiosSecure.delete(`/survey/${ress._id}`)
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-Sora text-blue-600 text-center mt-7 mb-6">Survey Status</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Survey Title</th>
              <th>Voted Status</th>
              <th>status control</th>
            </tr>
          </thead>
          <tbody>
            {surveys.map((ress, idx) => (
              <tr className="font-Sora text-zinc-900" key={idx}>
                <th>{idx + 1}</th>
                <td>{ress.title}</td>
                <td>{ress.status}</td>
                <td>
                  {ress.status === "publish" ? (
                    <button onClick={() => handleStatus(ress)} className="btn btn-outline bg-slate-600 text-white font-semibold">
                      Unpublish
                    </button>
                  ) : (
                    <button onClick={() => handleStatus(ress)} className="btn btn-outline bg-slate-600 text-white font-semibold">
                      Publish
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Report</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("report")} style={{ width: "100%" }} />
            <input className="btn btn-secondary" type="submit" />
          </form>
          <form method="dialog">
            {/* if there is a button in the form, it will close the modal */}
            <button className="btn btn-success mt-5 flex justify-center">Close</button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default SurveyStatus;


// import Swal from "sweetalert2";
// import useAllSurvey from "../../hooks/useAllSurvey";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import { useState } from "react";
// import { Modal } from "@mui/material";

// const SurveyStatus = () => {
//   const [surveys, loading, refetch] = useAllSurvey("");
//   const axiosSecure = useAxiosSecure();
//   const [selectedSurvey, setSelectedSurvey] = useState(null);
//   const [review, setReview] = useState("");
//   const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

//   const handleStatus = (survey) => {
//     setSelectedSurvey(survey);

//     // Show the modal only when the status is "publish"
//     if (survey.status === "publish") {
//       setIsReviewModalOpen(true);
//     } else {
//       // Handle unpublish logic directly when the status is not "publish"
//       handleUnpublish(survey);
//     }
//   };

//   const handleUnpublish = (survey) => {
//     const data = { status: "unpublish" };

//     axiosSecure
//       .patch(`/survey/${survey._id}`, data)
//       .then((res) => {
//         if (res.data.modifiedCount > 0) {
//           // Successfully unpublished
//           refetch();
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: `${survey.title} is unpublished!`,
//             showConfirmButton: false,
//             timer: 1500,
//           });
//         }
//       })
//       .catch((error) => {
//         console.error("Error unpublishing survey:", error);
//       });
//   };

//   const handleReviewSubmit = () => {
//     // Perform the review submission logic here
//     const data = {
//       review,
//       surveyId: selectedSurvey._id,
//     };

//     // Make a PATCH request to update the survey with the review
//     axiosSecure
//       .patch(`/survey/${selectedSurvey._id}`, { status: "unpublish" })
//       .then((res) => {
//         if (res.data.modifiedCount > 0) {
//           // Successfully unpublished, now submit the review
//           return axiosSecure.post("/submitReview", data);
//         }
//       })
//       .then((reviewRes) => {
//         if (reviewRes.data.insertedId) {
//           // Review submitted successfully
//           refetch();
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: `${selectedSurvey.title} is unpublished with review: ${review}`,
//             showConfirmButton: false,
//             timer: 1500,
//           });
//         }
//       })
//       .catch((error) => {
//         console.error("Error submitting review:", error);
//       });

//     // Close the modal
//     setIsReviewModalOpen(false);
//     setSelectedSurvey(null);
//     setReview("");
//   };

//   const handleReviewModalClose = () => {
//     // Close the review modal without submitting
//     setIsReviewModalOpen(false);
//     setSelectedSurvey(null);
//     setReview("");
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-Sora text-blue-600 text-center mt-7 mb-6">
//         Survey Status
//       </h2>
//       <div className="overflow-x-auto">
//         <table className="table">
//           <thead>
//             <tr>
//               <th></th>
//               <th>Survey Title</th>
//               <th>Voted Status</th>
//               <th>Status Control</th>
//             </tr>
//           </thead>
//           <tbody>
//             {surveys.map((survey, idx) => (
//               <tr className="font-Sora text-zinc-900" key={idx}>
//                 <th>{idx + 1}</th>
//                 <td>{survey.title}</td>
//                 <td>{survey.status}</td>
//                 <td>
//                   <button
//                     onClick={() => handleStatus(survey)}
//                     className="btn btn-outline bg-slate-600 text-white font-semibold"
//                   >
//                     {survey.status === "publish" ? "Unpublish" : "Publish"}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <Modal
//         open={isReviewModalOpen}
//         onClose={handleReviewModalClose}
//         aria-labelledby="review-modal-title"
//         aria-describedby="review-modal-description"
//       >
//         <div className="modal-content">
//           <h2 id="review-modal-title">Submit a Review</h2>
//           <textarea
//             value={review}
//             onChange={(e) => setReview(e.target.value)}
//             placeholder="Enter your review here..."
//           />
//           <button onClick={handleReviewSubmit}>Submit Review</button>
//           <button onClick={handleReviewModalClose}>Cancel</button>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default SurveyStatus;




