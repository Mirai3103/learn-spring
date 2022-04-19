import React from "react";
import { Table, Avatar, Spin } from "antd";
import Container from "./Container";
import "antd/dist/antd.css";
import { getAllStudents } from "./callApi";
import Footer from "./Footer";
import Modal from "antd/lib/modal/Modal";
import AddStudentForm from "./forms/AddStudentForm";

export default function App() {
  const [students, setStudents] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  React.useEffect(() => {
    getAllStudents().then((res) => {
      setStudents(res.data);
      setIsLoading(false);
    });
  }, []);
  const columns = [
    {
      title: "avatar",
      dataIndex: "avatar",
      render: (text, record) => (
        <Avatar size={"large"}>
          {record.fullName.charAt(0).toUpperCase()}
        </Avatar>
      ),
    },
    {
      title: "Student Id",
      dataIndex: "id",
      key: "studentId",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
  ];
  return (
    <Container>
      {isLoading ? (
        <Spin size="large"></Spin>
      ) : (
        <Table pagination={false} columns={columns} dataSource={students} rowKey={"id"}></Table>
      )}
       <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <AddStudentForm/>
      </Modal>
      <Footer count={students.length} showModal={showModal}></Footer>
    </Container>
  );
}
