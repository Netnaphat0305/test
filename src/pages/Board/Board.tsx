// Board.tsx
import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./Board.css";
import Announcement from "../../assets/Announcement.svg";
import PostBoard from "./PostBoard";
import '../../index.css';


const Board: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="board-container">
        <div className="board-content">
          <div className="subheadline">
            <h1>ผู้ว่าจ้างโพสต์งานเพื่อหาคนที่ใช่</h1>
            <h1>นักศึกษาเลือกงานที่สนใจ !</h1>
            <Button
              type="primary"
              onClick={() => navigate("/post-job")}
              className="btn-startpost"
            >
              เริ่มโพสต์ได้เลย
            </Button>
            <Button type="primary" className="btn-mypost">
              โพสต์ของฉัน
            </Button>
          </div>

          <div className="banner-container">
            <div className="banner-content">
              <h1>เริ่มต้นประกาศหานักศึกษา</h1>
              <p>
                โพสต์ประกาศหานักศึกษามาช่วยงานแบบตรงใจ <br />
                ได้เลยทันที
              </p>
              <Button
                type="primary"
                onClick={() => navigate("/post-job")}
                className="no-border-button"
              >
                เริ่มโพสต์ได้เลย
              </Button>
            </div>

            <img src={Announcement} alt="ประกาศ" className="banner-image" />
          </div>
        </div>
      </div>
      <PostBoard />
    </>
  );
};

export default Board;
