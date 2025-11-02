import React from "react";

export default function Footer() {
  return (
    <footer className="text-center mt-5 py-3 bg-light border-top">
      <small className="text-muted">
        © {new Date().getFullYear()} All rights reserved <strong>MelkTech</strong>
      </small>
    </footer>
  );
}
