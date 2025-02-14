import React from 'react'

function SocialShareIcon() {
  return (
    <>
     <div
              className="sharethis-inline-share-buttons st-center st-has-labels  st-inline-share-buttons st-animated"
              id="st-1"
            >
              <div
                className="st-btn st-first"
                data-network="facebook"
                style={{ display: "inline-block", backgroundColor: '#4267B2' }}
              >
                <img
                  alt="facebook sharing button"
                  src="https://platform-cdn.sharethis.com/img/facebook.svg"
                />
                <span className="st-label">facebook</span>
              </div>
              <div
                className="st-btn"
                data-network="twitter"
                style={{ display: "inline-block", backgroundColor: '#000000' }}
              >
                <img
                  alt="twitter sharing button"
                  src="https://platform-cdn.sharethis.com/img/twitter.svg"
                />
                <span className="st-label">Tweet</span>
              </div>
              <div
                className="st-btn"
                data-network="whatsapp"
                style={{ display: "inline-block", backgroundColor: '#25d366' }}
              >
                <img
                  alt="whatsapp sharing button"
                  src="https://platform-cdn.sharethis.com/img/whatsapp.svg"
                />
                <span className="st-label">whatsapp</span>
              </div>
              <div
                className="st-btn"
                data-network="telegram"
                style={{ display: "inline-block", backgroundColor: '#0088cc' }}
              >
                <img
                  alt="telegram sharing button"
                  src="https://platform-cdn.sharethis.com/img/telegram.svg"
                />
                <span className="st-label">telegram</span>
              </div>
              <div
                className="st-btn"
                data-network="linkedin"
                style={{ display: "inline-block", backgroundColor: '#0077b5' }}
              >
                <img
                  alt="linkedin sharing button"
                  src="https://platform-cdn.sharethis.com/img/linkedin.svg"
                />
                <span className="st-label">linkedin</span>
              </div>
              <div
                className="st-btn"
                data-network="messenger"
                style={{ display: "inline-block", backgroundColor: '#0077b5' }}
              >
                <img
                  alt="messenger sharing button"
                  src="https://platform-cdn.sharethis.com/img/messenger.svg"
                />
                <span className="st-label">messenger</span>
              </div>
              <div
                className="st-btn"
                data-network="snapchat"
                style={{ display: "inline-block", backgroundColor: '#fffc00' }}
              >
                <img
                  alt="snapchat sharing button"
                  src="https://platform-cdn.sharethis.com/img/snapchat.svg"
                />
                <span className="st-label">Snap</span>
              </div>
              <div
                className="st-btn"
                data-network="email"
                style={{ display: "inline-block", backgroundColor: '#7d7d7d' }}
              >
                <img
                  alt="email sharing button"
                  src="https://platform-cdn.sharethis.com/img/email.svg"
                />
                <span className="st-label">Email</span>
              </div>
              <div
                className="st-btn st-last"
                data-network="sharethis"
                style={{ display: "inline-block", backgroundColor: '#95D03A' }}
              >
                <img
                  alt="sharethis sharing button"
                  src="https://platform-cdn.sharethis.com/img/sharethis.svg"
                />
                <span className="st-label">Share</span>
              </div>
            </div>
    </>
  )
}

export default SocialShareIcon