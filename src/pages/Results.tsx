import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import questions from "../questions.json";
import { PieChart } from "react-minimal-pie-chart";
import { Modal, Button } from "react-bootstrap";
import '../pages/Results.css';
import { useNavigate } from "react-router-dom";

const Results = () => {
  const [appData] = useContext(AppContext);
  const [Score, setScore] = useState(4);
  const navigate = useNavigate();
  let correctPercent = (Score / 5) * 100;
  let incorrectPercent = 100 - correctPercent;
  function retakeTest() {
    return (
      <div>
        window.location.reload();
      </div>
    )
  }
  return (
    <>
      <div>
        {Object.entries(appData.answers).map(([currentIndex, answer]: any) => (
          <>
            {questions.map((post: any) => {
            })
            }
            <Modal show={true} onHide={retakeTest} animation={false}>
              <Modal.Header>
                <Modal.Title className="modal-title" >Result: {correctPercent}%</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <PieChart
                  data={[
                    {
                      title: "Correct",
                      value: correctPercent,
                      color: "#82EF64",
                    },
                    {
                      title: "Incorrect",
                      value: incorrectPercent,
                      color: "#F65B41",
                    },
                  ]}
                />
                <div className="numbers-container">
                  <div className="numbers">
                    <div className="number correct modal-title">Correct Answers:{Score}</div>
                    <div className="number incorrect modal-title">Wrong Answers:{5 - Score}</div>
                  </div>

                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={(retakeTest) => navigate(`/Questions`)}>
                  Retake Test
                </Button>
              </Modal.Footer>
            </Modal>
          </>

        ))}
      </div>
    </>
  );
};

export default Results;