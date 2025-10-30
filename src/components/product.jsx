import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { url, fileUrl } from '../const';
import { 
  Button, Dialog, DialogActions, DialogContent, DialogTitle, 
  TextField, FormControl, InputLabel, MenuItem, Select 
} from '@mui/material';

export default function Product() {
  const [users, setUsers] = useState([]);

  // --- GET ---
  async function getUser() {
    try {
      const { data } = await axios.get(url);
      setUsers(data.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => { getUser(); }, []);

  // --- ADD ---
  const [openAdd, setOpenAdd] = useState(false);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("active");
  const [images, setImages] = useState([]);

  async function addUser() {
    try {
      const formData = new FormData();
      images.forEach(img => formData.append("Images", img));
      formData.append("Name", name);
      formData.append("Description", status);

      await axios.post(url, formData, { headers: { "Content-Type": "multipart/form-data" } });

      await getUser(); // подтягиваем свежие карточки с бекенда
      setOpenAdd(false);
      setName(""); setStatus("active"); setImages([]);
    } catch (err) {
      console.error(err);
    }
  }

  // --- DELETE ---
  const [openDelete, setOpenDelete] = useState(false);
  const [idDelete, setIdDelete] = useState(null);

  async function deleteUser(id) {
    try {
      await axios.delete(`${url}?id=${id}`);
      await getUser();
      setOpenDelete(false);
    } catch (err) { console.error(err); }
  }

  // --- INFO ---
  const [openInfo, setOpenInfo] = useState(false);
  const [infoUser, setInfoUser] = useState(null);

  // --- EDIT ---
  const [openEdit, setOpenEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editStatus, setEditStatus] = useState("");

  async function editUser() {
    try {
      const currentUser = users.find(u => u.id === editId);
      const updateData = { 
        id: editId, 
        name: editName, 
        description: editStatus, 
        isCompleted: currentUser?.isCompleted || false 
      };
      await axios.put(url, updateData, { headers: { "Content-Type": "application/json" } });
      await getUser();
      setOpenEdit(false);
    } catch (err) { console.error(err); }
  }

  return (
    <div className="max-w-[1400px] m-auto p-4">
      {/* Add User Button */}
      <div className="mb-4 flex justify-center">
        <Button variant="contained" color="success" onClick={() => setOpenAdd(true)}>
          Add User
        </Button>
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map(u => (
          <div key={u.id} className="p-4 border border-[#FCD54C] w-100 rounded-lg shadow-lg flex flex-col items-center gap-3">
            {u.images?.length ? (
              <img src={`${fileUrl}/${u.images[0].imageName}`} alt={u.name} className="w-32 h-32 object-cover rounded-full" />
            ) : (
              <div className="w-32 h-32 bg-gray-200 flex items-center justify-center text-gray-500 rounded-full">
                No Image
              </div>
            )}
            <h1 className="text-xl font-semibold text-[white]">{u.name}</h1>
            <p className={u.description === 'active' ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
              {u.description === 'active' ? 'Active' : 'Inactive'}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-2 mt-2">
              <Button variant="outlined" color="primary" onClick={() => { setInfoUser(u); setOpenInfo(true); }}>
                Info
              </Button>
              <Button variant="outlined" color="warning" onClick={() => { 
                setEditId(u.id); setEditName(u.name); setEditStatus(u.description); setOpenEdit(true);
              }}>
                Edit
              </Button>
              <Button variant="outlined" color="error" onClick={() => { setIdDelete(u.id); setOpenDelete(true); }}>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* --- ADD DIALOG --- */}
      <Dialog open={openAdd} onClose={() => setOpenAdd(false)}>
        <DialogTitle className="text-2xl font-bold">Add New User</DialogTitle>
        <DialogContent className="flex flex-col gap-4 min-w-[350px]">
          <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select value={status} onChange={(e) => setStatus(e.target.value)}>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
          <input type="file" multiple onChange={(e) => setImages(Array.from(e.target.files))} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAdd(false)}>Cancel</Button>
          <Button onClick={addUser} autoFocus>Add</Button>
        </DialogActions>
      </Dialog>

      {/* --- DELETE DIALOG --- */}
      <Dialog open={openDelete} onClose={() => setOpenDelete(false)}>
        <DialogTitle>Delete this User?</DialogTitle>
        <DialogActions>
          <Button onClick={() => setOpenDelete(false)}>Cancel</Button>
          <Button onClick={() => deleteUser(idDelete)} color="error" autoFocus>Delete</Button>
        </DialogActions>
      </Dialog>

      {/* --- INFO DIALOG --- */}
      <Dialog open={openInfo} onClose={() => setOpenInfo(false)}>
        <DialogTitle>User Info</DialogTitle>
        <DialogContent className="flex flex-col items-center gap-4">
          {infoUser?.images?.length ? (
            <img src={`${fileUrl}/${infoUser.images[0].imageName}`} alt={infoUser.name} className="w-32 h-32 object-cover rounded-full" />
          ) : (
            <div className="w-32 h-32 bg-gray-200 flex items-center justify-center text-gray-500 rounded-full">No Image</div>
          )}
          <h1 className="text-xl font-semibold">{infoUser?.name}</h1>
          <p>ID: {infoUser?.id}</p>
          <p className={infoUser?.description === 'active' ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
            {infoUser?.description === 'active' ? 'Active' : 'Inactive'}
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenInfo(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* --- EDIT DIALOG --- */}
      <Dialog open={openEdit} onClose={() => setOpenEdit(false)}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent className="flex flex-col gap-4 min-w-[350px]">
          <TextField label="Name" value={editName} onChange={(e) => setEditName(e.target.value)} fullWidth />
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select value={editStatus} onChange={(e) => setEditStatus(e.target.value)}>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEdit(false)}>Cancel</Button>
          <Button onClick={editUser} autoFocus>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
