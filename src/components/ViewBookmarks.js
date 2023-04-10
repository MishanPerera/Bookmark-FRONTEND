import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ViewBookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    function getData() {
      axios
        .get("http://localhost:3000/api/bookmarks")
        .then((res) => {
          setBookmarks(res.data);
        })
        .catch((e) => {
          alert(e.message);
        });
    }
    getData();
  }, []);

  const setData = (bookmarks) => {
    let { _id, name, url, description, status, expiryDate } = bookmarks;
    localStorage.setItem("id", _id);
    localStorage.setItem("name", name);
    localStorage.setItem("url", url);
    localStorage.setItem("description", description);
    localStorage.setItem("status", status);
    localStorage.setItem("expireDate", expiryDate);
  };

  const deleteBookmark = (id) => {
    axios
      .delete(`http://localhost:3000/api/bookmarks/delete/${id}`)
      .then(() => {
        alert("deleted succefully");
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <div>
      <div className="view">
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">name</th>
              <th scope="col">url</th>
              <th scope="col">description</th>
              <th scope="col">status</th>
              <th scope="col">expiryDate</th>
              <th scope="col">EDIT</th>
              <th scope="col">DELETE</th>
            </tr>
          </thead>
          <tbody>
            {bookmarks.map(function (bookmarks) {
              return (
                <tr>
                  <td>{bookmarks.name}</td>
                  <td>{bookmarks.url}</td>
                  <td>{bookmarks.description}</td>
                  <td>{bookmarks.status}</td>
                  <td>{bookmarks.expiryDate}</td>

                  <td>
                    <Link
                      to={"http://localhost:3000/api/bookmarks/update"}
                    ></Link>
                    <button onClick={() => setData(bookmarks)}></button>
                    <b>EDIT</b>
                  </td>

                  <td>
                    <button
                      onClick={() => deleteBookmark(bookmarks._id)}
                    ></button>
                    <b>DELETE</b>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
