import React, { useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import { UploadFile } from "@mui/icons-material";
//css file outside
const UploadModal = ({ open, handleClose, onImageUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedImage(URL.createObjectURL(file));
      if (onImageUpload) onImageUpload(file);
    } else {
      alert("Please select a valid image file.");
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="upload-modal-title"
      aria-describedby="upload-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500, // Increased width for a larger modal
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            backgroundImage: "url('https://source.unsplash.com/random')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: 200, // Increased height for a larger header section
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.3))",
            }}
          />
          <Typography
            id="upload-modal-title"
            variant="h5"
            component="h2"
            sx={{
              position: "absolute",
              bottom: 16,
              left: 16,
              color: "white",
              fontWeight: "bold",
            }}
          >
            Upload Profile Picture
          </Typography>
        </Box>
        <Box sx={{ p: 3 }}>
          {selectedImage && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 3,
              }}
            >
              <img
                src={selectedImage}
                alt="Selected"
                style={{
                  maxWidth: "100%",
                  maxHeight: "200px",
                  borderRadius: "8px",
                }}
              />
            </Box>
          )}
          <Button
            variant="contained"
            component="label"
            startIcon={<UploadFile />}
            sx={{
              mt: 2,
              bgcolor: "#1976d2",
              color: "white",
              '&:hover': {
                bgcolor: "#1565c0",
              },
            }}
          >
            Choose Image
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleUpload}
            />
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default UploadModal;
