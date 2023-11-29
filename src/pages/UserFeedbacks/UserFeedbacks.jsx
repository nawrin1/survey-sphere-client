import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const UserFeedbacks = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const { data: comment = [] } = useQuery({
    queryKey: ['allcomment', user],
    queryFn: async () => {
      const res = await axiosPublic.get(`/comment/${user.email}`);
      return res.data;
    }
  });

  // Use an array of boolean values to track the open/close state for each modal
  const [openModals, setOpenModals] = useState(Array(comment.length).fill(false));

  const handleOpen = (idx) => {
    const newOpenModals = [...openModals];
    newOpenModals[idx] = true;
    setOpenModals(newOpenModals);
  };

  const handleClose = (idx) => {
    const newOpenModals = [...openModals];
    newOpenModals[idx] = false;
    setOpenModals(newOpenModals);
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <h2 className="text-2xl font-Sora font-bold text-center text-blue-800 my-8">User Feedbacks</h2>
      <div className="overflow-x-auto">
        <table className="table ">
          <thead>
            <tr>
              <th></th>
              <th>Survey Title</th>
              <th>Commented By</th>
              <th>Feedbacks</th>
            </tr>
          </thead>
          <tbody>
            {comment.map((com, idx) => (
              <tr className="font-Sora text-zinc-900" key={idx}>
                <th>{idx + 1}</th>
                <td>{com.title}</td>
                <td>{com.votedby}</td>
                <td>
                  <Button style={{ backgroundColor: 'violet', color: 'white', fontWeight: 'bold' }} onClick={() => handleOpen(idx)}>Feedback</Button>
                  <Modal
                    open={openModals[idx]}
                    onClose={() => handleClose(idx)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography id="modal-modal-title" variant="h6" component="h2" style={{fontFamily:'Sora',color:'blueviolet'}}>
                       User Feedback
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2, fontFamily:'Sora' }}>
                        {com.comments}
                      </Typography>
                    </Box>
                  </Modal>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserFeedbacks;
