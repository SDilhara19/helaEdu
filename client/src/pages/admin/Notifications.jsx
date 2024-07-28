import React, { useState } from "react";
import { Header } from "@/components/common";
import Sidebar from "@components/admin/Sidebar";
import NotificationList from "@/components/admin/NotificationList";
import NotificationFilter from "@/components/admin/NotificationFilter";
import NotificationDetails from "@/components/admin/NotificationDetails";
import NotificationStats from "@/components/admin/NotificationStats";

const NotificationsPage = () => {
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [filter, setFilter] = useState("all");
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Student Registration",
      details: "A new student has registered.",
      timestamp: "2024-07-23",
      type: "info",
    },
    {
      id: 2,
      title: "System Error",
      details: "An error occurred in the system.",
      timestamp: "2024-07-22",
      type: "error",
    },
    {
      id: 3,
      title: "New Student Registration",
      details: "A new student has registered.",
      timestamp: "2024-07-23",
      type: "info",
    },
    {
      id: 4,
      title: "System Error",
      details: "An error occurred in the system.",
      timestamp: "2024-07-22",
      type: "error",
    },
  ]);

  const handleFilterChange = (type) => {
    setFilter(type);
  };

  const handleMarkAsRead = (id) => {
    // Handle marking a notification as read
  };

  const handleDelete = (id) => {
    // Handle deleting a notification
  };

  return (
    <>
      <Header />
      <div className="dashboard">
        <div className="dashboard-wrapper">
          <div className="sidebar-wrapper">
            <Sidebar />
          </div>
          <div className="content-wrapper">
            <div className="content">
              <h1
                className="font-montserrat font-bold text-left mb-6"
                style={{
                  fontSize: "3rem" /* Adjusted font size */,
                  textAlign: "center",
                  padding: "4rem",
                }}
              >
                Notification
                <br />
              </h1>
              <NotificationStats
                stats={{
                  total: notifications.length,
                  unread: 2,
                  info: 1,
                  warning: 0,
                  error: 1,
                }}
                className="mb-12"
              />
              <NotificationFilter
                onFilterChange={handleFilterChange}
                className="mb-12"
              />
              <NotificationList
                notifications={notifications}
                onMarkAsRead={handleMarkAsRead}
                className="mb-12"
              />
              {selectedNotification && (
                <NotificationDetails
                  notification={selectedNotification}
                  onClose={() => setSelectedNotification(null)}
                  onDelete={handleDelete}
                  className="mb-12"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationsPage;
