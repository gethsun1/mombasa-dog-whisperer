import React from 'react';
import { Box, IconButton } from '@mui/material';
import { FaWhatsapp, FaTiktok, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

export default function SocialFooter() {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: 2,
        zIndex: 10,
      }}
    >
      {/* WhatsApp Icon */}
      <IconButton
        href="https://wa.me/254712930406"
        target="_blank"
        sx={{ color: '#25D366' }} // WhatsApp green
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={24} />
      </IconButton>

      {/* TikTok Icon */}
      <IconButton
        href="https://www.tiktok.com/@jumakelly199gmail.com"
        target="_blank"
        sx={{ color: '#000000' }} // TikTok often uses black as a base
        aria-label="TikTok"
      >
        <FaTiktok size={24} />
      </IconButton>

      {/* Facebook Icon */}
      <IconButton
        href="https://www.facebook.com/YourFacebookPage"
        target="_blank"
        sx={{ color: '#1877F2' }} // Facebook blue
        aria-label="Facebook"
      >
        <FaFacebook size={24} />
      </IconButton>

      {/* YouTube Icon */}
      <IconButton
        href="https://www.youtube.com/@Mombasadogwhisper"
        target="_blank"
        sx={{ color: '#FF0000' }} // YouTube red
        aria-label="YouTube"
      >
        <FaYoutube size={24} />
      </IconButton>

      {/* Twitter Icon */}
      <IconButton
        href="https://twitter.com/YourTwitterHandle"
        target="_blank"
        aria-label="Twitter"
      >
        <FaXTwitter size={24} />
      </IconButton>


      {/* Instagram Icon */}
      <IconButton
        href="https://www.youtube.com/YourYouTubeChannel"
        target="_blank"
        sx={{ color: '#c13584' }} // IG dark pink
        aria-label="Instagram"
      >
        <FaInstagram size={24} />
      </IconButton>
    </Box>
  );
}
