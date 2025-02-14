import moment from "moment";
import React from "react";

function WinHolidayModal({ rowData, setShowModal }) {
  return (
    <div
      className="modal show d-block"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog p-0">
        <div className="modal-content border-0 p-0">

          <div className="modal-header">
            <h5 className="modal-title" style={{ color: "#9e7922" }}>Holiday Details</h5>
            <button
              type="button"
              className="btn-close theme-btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setShowModal(false)}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 21L21 1M1 1L21 21" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          <div className="modal-body"
          >
            <div className="details-box">
                <h6 className="hotel-id">{rowData?.hotelId?.hotel_name} ({rowData?.hotelId?.country?.country})</h6>
                <div className="hotel-title">{rowData?.title}</div>
                <p className="hotel-description">{rowData?.holidaydescription}</p>
              <div>
                <p>
                  <strong>Date from:</strong> {moment(rowData?.dateFrom).format("DD-MM-YYYY")}
                </p>
                <p>
                  <strong>Date to:</strong> {moment(rowData?.dateTo).format("DD-MM-YYYY")}
                </p>
                <p>
                  <strong>Closure Date:</strong>{moment(rowData?.competitionclosure).format("DD-MM-YYYY")}
                </p>
                <p>
                  <strong>Attendant:</strong> {rowData?.adult_attendees} Adult and {rowData?.children_attendees} children
                </p>
                <p>
                  <strong>Number of users applied:</strong> {rowData?.applied_users?.length}
                </p>
                <p>
                  <strong>Status:</strong> {rowData?.status}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WinHolidayModal;
