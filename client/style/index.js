const insert = require('insert-css')

insert(`
  body {
    background: #1c1c1c;
    color: #f8f9fa;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .header {
    background: #343a40;
    padding: 1rem 0;
    margin-bottom: 2rem;
    border-bottom: 1px solid #495057;
  }

  .nav {
    display: flex;
    gap: 1rem;
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
`)