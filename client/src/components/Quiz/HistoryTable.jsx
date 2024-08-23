import BackKey from "@components/common/BackKey";
import React from "react";
import { useNavigate } from "react-router-dom";

const HistoryTable = ({ subject }) => {
  const navigator = useNavigate();

  const clickBack = () => {
    navigator(`/quiz`);
  };
  return (
    <div>
      <div className="h-full p-5 mx-auto rounded-xl bg-white-transparent w-2/3">
        <div className="overflow-x-auto relative">
          <div className="absolute top-4">
            <BackKey click={clickBack} />
          </div>
          <div className="s-topic text-blue text-center leading-tight">
            Sanduni Dilhara
          </div>
          <div className="text-center text-gray1 s-text mt-0">{subject}</div>
          <div className="mx-24 rounded-xl  p-10 overflow-y-scroll h-3/6">
            <div className="mx-auto w-full ">
              <div className="table-main text-1 ">
                <div className="thead-main history-table">
                  <div className="td-main h-full flex items-center">
                    Quiz Number
                  </div>
                  <div className="td-main">
                    <div className="flex items-center p-0 ">
                      <div className="mx-4">Score</div>
                    </div>
                  </div>
                  <div className="td-main">Time taken</div>
                </div>
                <div className="tbody-main">
                  <div className="tr-main history-table">
                    <div className="td-main h-full flex items-center">
                      <div className="rank-circle">1</div>
                    </div>
                    <div className="td-main">6/10</div>
                    <div className="td-main">8:12 s</div>
                  </div>
                  <div className="tr-main history-table">
                    <div className="td-main h-full flex items-center">
                      <div className="rank-circle">2</div>
                    </div>
                    <div className="td-main">6/10</div>
                    <div className="td-main">8:12 s</div>
                  </div>
                  <div className="tr-main history-table">
                    <div className="td-main h-full flex items-center">
                      <div className="rank-circle">4</div>
                    </div>
                    <div className="td-main">4/10</div>
                    <div className="td-main">10:00 s</div>
                  </div>

                  <div className="tr-main history-table">
                    <div className="td-main h-full flex items-center">
                      <div className="rank-circle">6</div>
                    </div>
                    <div className="td-main">7/10</div>
                    <div className="td-main">9:40 s</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryTable;
