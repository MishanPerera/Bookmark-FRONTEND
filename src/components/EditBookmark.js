import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function EditBookmarks() {
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [expireDate, setExpireDate] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setId(localStorage.getItem("name"));
    setId(localStorage.getItem("url"));
    setId(localStorage.getItem("description"));
    setId(localStorage.getItem("status"));
    setId(localStorage.getItem("expiryDate"));
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const newBookmark = {
      name,
      url,
      description,
      status,
      expiryDate,
    };

    await axios
      .put(`http://localhost:3000/api/bookmarks/update/${id}`, newBookmark)
      .then(() => {
        alert("Update Sucessfully");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div>
      <div className="view">
        <form className="Form">
          <div className="mb-3"></div>
          <label for="name">
            <b>Name</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            vale={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <div className="mb-3"></div>
          <label for="name">
            <b>url</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="url"
            vale={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />

          <div className="mb-3"></div>
          <label for="name">
            <b>Description</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            vale={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />

          <div className="mb-3"></div>
          <label for="name">
            <b>status</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="status"
            vale={status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          />

          <div className="mb-3"></div>
          <label for="name">
            <b>expiry date</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="expiryDate"
            vale={expireDate}
            onChange={(e) => {
              setExpireDate(e.target.value);
            }}
          />

          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => {
              onsubmit(e);
            }}
          />
        </form>
      </div>
    </div>
  );
}
