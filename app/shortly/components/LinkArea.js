"use client";
import { useState, useEffect } from 'react';
import { z } from 'zod';
import { useQRCode } from 'next-qrcode';

const urlSchema = z.string().url("Geçerli bir URL giriniz!");

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
const LinkArea = () => {
  const { Canvas } = useQRCode();
  const [longUrl, setLongUrl] = useState('');
  const [shortUrls, setShortUrls] = useState([]);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [qrText, setQrText] = useState('');
  useEffect(() => {
    const storedUrls = JSON.parse(localStorage.getItem('shortUrls')) || [];
    setShortUrls(storedUrls);
  }, []);