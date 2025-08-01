const insert = require('insert-css')

insert(`
  body {
    background: #1c1c1c;
    color: #f8f9fa;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 20px 20px;
    position: relative;
  }
  
  .user-email {
    font-size: 0.75rem;
    color: #6c757d;
    text-align: right;
    margin-bottom: 1rem;
  }
  
  /* Mobile responsive styles */
  @media (max-width: 768px) {
    .container {
      padding: 15px;
      width: 100%;
      box-sizing: border-box;
    }
    
    .content {
      padding: 1.5rem;
    }
  }
  
  @media (max-width: 480px) {
    .container {
      padding: 10px;
    }
    
    .content {
      padding: 1rem;
      margin-bottom: 1rem;
    }
    
    .content h1 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    
    .content h2 {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
    }
  }

  .header {
    background: #343a40;
    padding: 0.5rem 0;
    border-bottom: 1px solid #495057;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 2rem;
  }
  
  .nav-left,
  .nav-center,
  .nav-right {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .nav-center {
    flex: 1;
    justify-content: center;
  }
  
  @media (max-width: 768px) {
    .header {
      padding: 0.5rem 0;
    }
    
    .nav {
      min-height: auto;
    }
    
    .nav-left,
    .nav-center,
    .nav-right {
      gap: 0.5rem;
    }
    
    .nav a, .logout-btn, .auth-btn {
      padding: 0.4rem 0.6rem;
      font-size: 0.85rem;
    }
    
    .user-info {
      font-size: 0.8rem;
      margin-right: 0.5rem;
    }
  }
  
  @media (max-width: 480px) {
    .header {
      padding: 0.4rem 0;
    }
    
    .user-info {
      font-size: 0.8rem;
      margin-right: 0;
      width: 100%;
      text-align: right;
      margin-top: 0.5rem;
    }
    
    .nav a, .logout-btn, .auth-btn {
      padding: 0.4rem 0.7rem;
      font-size: 0.9rem;
    }
  }

  .nav a {
    color: #fff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.2s;
  }

  .nav a:hover,
  .nav a.active {
    background-color: #495057;
  }

  /* User info display */
  .user-info {
    color: #adb5bd;
    font-size: 0.85rem;
    margin-right: 0.75rem;
  }

  /* Auth and logout buttons */
  .logout-btn,
  .auth-btn {
    border: none;
    padding: 0.4rem 0.75rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.85rem;
    transition: background-color 0.2s;
    text-decoration: none;
    display: inline-block;
  }
  
  .auth-btn {
    background: #007bff;
    color: white;
  }
  
  .logout-btn {
    background: transparent;
    color: #adb5bd;
    border: 1px solid #495057;
  }
  
  .logout-btn:hover {
    background: #495057;
    color: #fff;
  }
  
  .auth-btn:hover {
    background: #0056b3;
  }

  .content {
    background: #212529;
    padding: 2rem;
    border-radius: 8px;
    border: 1px solid #343a40;
  }

  .btn {
    background: #007bff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    transition: background-color 0.2s;
  }

  .btn:hover {
    background: #0056b3;
  }

  .btn-secondary {
    background: #6c757d;
  }

  .btn-secondary:hover {
    background: #545b62;
  }

  .widget-list {
    display: grid;
    gap: 1rem;
    margin-top: 1rem;
  }

  .widget-item {
    background: #343a40;
    padding: 1rem;
    border-radius: 4px;
    border: 1px solid #495057;
  }

  .widget-item h3 {
    margin: 0 0 0.5rem 0;
    color: #fff;
  }

  .widget-meta {
    color: #adb5bd;
    font-size: 0.9rem;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.25rem;
    color: #f8f9fa;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #495057;
    border-radius: 4px;
    background: #343a40;
    color: #f8f9fa;
    box-sizing: border-box;
  }
  
  @media (max-width: 768px) {
    .form-group input,
    .form-group textarea {
      font-size: 16px; /* Prevent zoom on iOS */
    }
  }

  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #007bff;
  }

  .loading {
    text-align: center;
    padding: 2rem;
    color: #adb5bd;
  }

  .error {
    background: #721c24;
    color: #f1aeb5;
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    border: 1px solid #842029;
  }

  .success {
    background: #0f5132;
    color: #a3cfbb;
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    border: 1px solid #146c43;
  }

  /* Auth container styling */
  .auth-container {
    max-width: 450px;
    margin: 2rem auto;
    padding: 2rem;
    background: #212529;
    border-radius: 8px;
    border: 1px solid #343a40;
  }
  
  @media (max-width: 768px) {
    .auth-container {
      max-width: none !important;
      margin: 1rem 0 !important;
      padding: 1rem !important;
      border-radius: 4px;
      width: 100% !important;
      box-sizing: border-box;
    }
    
    /* Override authentic-ui generated styles */
    .auth-container > div {
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;
      box-sizing: border-box !important;
    }
    
    .auth-container form,
    .auth-container form > div {
      width: 100% !important;
      max-width: 100% !important;
      box-sizing: border-box !important;
    }
    
    .auth-container input,
    .auth-container button {
      width: 100% !important;
      max-width: 100% !important;
      box-sizing: border-box !important;
    }
  }
  
  .auth-container h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #f8f9fa;
  }
  
  .auth-container input {
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1rem;
    background: #343a40;
    border: 1px solid #495057;
    border-radius: 4px;
    color: #f8f9fa;
    font-size: 1rem;
    box-sizing: border-box;
  }
  
  @media (max-width: 768px) {
    .auth-container input {
      font-size: 16px; /* Prevent zoom on iOS */
      padding: 1rem;
    }
  }
  
  /* Fix input attributes for better UX */
  .auth-container input[name="email"] {
    text-transform: none !important;
    autocapitalize: none !important;
    autocorrect: off !important;
    spellcheck: false !important;
  }
  
  .auth-container input[type="email"] {
    text-transform: none !important;
    autocapitalize: none !important;
    autocorrect: off !important;
    spellcheck: false !important;
  }
  
  .auth-container input:focus {
    outline: none;
    border-color: #007bff;
    background: #495057;
  }
  
  .auth-container button {
    width: 100%;
    padding: 0.75rem;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    margin-bottom: 1rem;
    transition: background-color 0.2s;
    box-sizing: border-box;
  }
  
  @media (max-width: 768px) {
    .auth-container button {
      padding: 1rem;
      font-size: 16px;
    }
  }
  
  .auth-container button:hover {
    background: #0056b3;
  }
  
  .auth-container button:disabled {
    background: #6c757d;
    cursor: not-allowed;
  }
  
  .auth-container .auth-error {
    color: #f1aeb5;
    background: #721c24;
    padding: 0.75rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    text-align: center;
    border: 1px solid #842029;
  }
  
  .auth-container .auth-success {
    color: #a3cfbb;
    background: #0f5132;
    padding: 0.75rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    text-align: center;
    border: 1px solid #146c43;
  }
  
  .auth-container .auth-links {
    text-align: center;
    margin-top: 1rem;
  }
  
  .auth-container .auth-links a {
    color: #007bff;
    text-decoration: none;
    margin: 0 0.5rem;
  }
  
  .auth-container .auth-links a:hover {
    text-decoration: underline;
  }
  
  /* Complete authentic-ui styling override (styles: false) */
  /* Since styles are disabled, we just need to style the auth-container directly */
  .auth-container {
    background: #212529;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 16px;
    padding: 30px 50px;
    border-radius: 8px;
    width: 100%;
    max-width: 450px;
    margin: 2rem auto;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 14px 45px, rgba(0, 0, 0, 0.3) 0px 10px 18px;
    border: 1px solid #343a40;
    color: #f8f9fa;
    box-sizing: border-box;
  }
  
  /* Mobile responsive styling for auth container */
  @media (max-width: 768px) {
    .auth-container {
      margin: 1rem;
      padding: 20px 30px;
      max-width: none;
      width: calc(100% - 2rem);
    }
  }
  
  /* Title styling */
  .auth-container h1,
  .auth-container h2,
  .auth-container .title {
    font-size: 16px;
    font-weight: bold;
    margin: 1.33em 0;
    color: #f8f9fa;
  }
  
  /* Input styling matching authentic-ui */
  .auth-container input {
    width: 100%;
    height: 36px;
    outline: none;
    font-size: 16px;
    font-weight: 100;
    line-height: 24px;
    border: none;
    border-bottom: 1px solid #495057;
    margin-bottom: 16px;
    background: transparent;
    color: #f8f9fa;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  
  .auth-container input:focus {
    border-bottom-color: #007bff;
    background: transparent;
  }
  
  /* Error styling */
  .auth-container .error {
    margin: 20px 0;
    color: #f1aeb5;
    background: #721c24;
    padding: 0.75rem;
    border-radius: 4px;
    border: 1px solid #842029;
  }
  
  /* Submit button styling matching authentic-ui */
  .auth-container button,
  .auth-container input[type="submit"] {
    color: #fff;
    background-color: #007bff;
    width: 100%;
    padding: 0px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0px;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    border: 0px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 6px, rgba(0, 0, 0, 0.3) 0px 1px 4px;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-appearance: button;
    margin-bottom: 1rem;
  }
  
  .auth-container button:hover,
  .auth-container input[type="submit"]:hover {
    background-color: #0056b3;
  }
  
  .auth-container button:disabled,
  .auth-container input[type="submit"]:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
  
  /* Links styling */
  .auth-container .links {
    margin-top: 20px;
    color: #adb5bd;
  }
  
  .auth-container .links a,
  .auth-container .link,
  .auth-container a {
    color: #4fc3f7; /* Light blue for better visibility on dark background */
    font-weight: 100;
    text-decoration: none;
  }
  
  .auth-container .links a:hover,
  .auth-container .link:hover,
  .auth-container a:hover {
    color: #81d4fa; /* Lighter blue on hover */
    text-decoration: underline;
  }
  
  /* Success message styling */
  .auth-container .success {
    margin: 20px 0;
    color: #a3cfbb;
    background: #0f5132;
    padding: 0.75rem;
    border-radius: 4px;
    border: 1px solid #146c43;
  }
`)