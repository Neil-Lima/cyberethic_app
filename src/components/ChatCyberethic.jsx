import React, { useState } from 'react';
import { Container, Button, Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function ChatCyberethic() {
  const [openChat, setOpenChat] = useState(false);

  const toggleChat = () => {
    setOpenChat(!openChat);
  };

  return (
    <div className="container bootstrap snippets bootdey">
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <div className="portlet portlet-default">
            <div className="portlet-heading">
              <div className="portlet-title">
                <h4><FontAwesomeIcon icon={faCircle} className="text-green" /> Jane Smith</h4>
              </div>
              <div className="portlet-widgets">
                <div className="btn-group">
                  <button type="button" className="btn btn-white dropdown-toggle btn-xs" data-toggle="dropdown">
                    <FontAwesomeIcon icon={faCircle} className="text-green" /> Status
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu" role="menu">
                    <li><a href="#"><FontAwesomeIcon icon={faCircle} className="text-green" /> Online</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faCircle} className="text-orange" /> Away</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faCircle} className="text-red" /> Offline</a></li>
                  </ul>
                </div>
                <span className="divider"></span>
                <Button onClick={toggleChat}><FontAwesomeIcon icon={faChevronDown} /></Button>
              </div>
              <div className="clearfix"></div>
            </div>
            <Collapse in={openChat}>
              <div id="chat" className="panel-collapse collapse in">
                <div className="portlet-body chat-widget" style={{ overflowY: 'auto', width: 'auto', height: '300px' }}>
                  {/* Chat messages go here */}
                </div>
                <div className="portlet-footer">
                  <form role="form">
                    <div className="form-group">
                      <textarea className="form-control" placeholder="Enter message..."></textarea>
                    </div>
                    <div className="form-group">
                      <button type="button" className="btn btn-default pull-right">Send</button>
                      <div className="clearfix"></div>
                    </div>
                  </form>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatCyberethic;
