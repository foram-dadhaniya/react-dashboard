import { useEffect, useState } from "react";
import { Formik, FormikHelpers, Form } from "formik";
import { TextInput } from "../../components/form/TextInput";
import { Button } from "../auth/Auth.styles";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { UserInputValues } from "../../types/types";
import {
  addUserToFirebase,
  fetchUsersFromFirebase,
  editUserToFirebase,
  deleteUserToFirebase,
} from "./usersSlice";
import { toast } from "react-toastify";
import { Table } from "../../styles/Table.style";
import { Card } from "../../components/card/Card";

export const UserList: React.FC = () => {
  const [editingUser, setEditingUser] = useState<UserInputValues | null>(null);
  const usersData = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch<AppDispatch>();
  const userInitialValues: UserInputValues = {
    id: "",
    name: "",
    email: "",
    birthdate: "",
    number: "",
  };

  useEffect(() => {
    dispatch(fetchUsersFromFirebase());
  }, [dispatch]);

  const handleUserSubmit = (
    values: UserInputValues,
    actions: FormikHelpers<UserInputValues>
  ) => {
    if (editingUser) {
      dispatch(editUserToFirebase(values));
      setEditingUser(null);
    } else {
      dispatch(addUserToFirebase({ ...values }));
    }
    actions.resetForm();
  };

  return (
    <>
      <Card header="Create User">
      <Formik
            initialValues={editingUser || userInitialValues}
            enableReinitialize
            onSubmit={handleUserSubmit}
          >
            <Form>
              <div className="row g-2">
                <div className="col-md-6">
                  <TextInput
                    label="Name"
                    type="text"
                    name="name"
                    placeholder="Enter full name"
                  />
                </div>
                <div className="col-md-6">
                  <TextInput
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter email"
                  />
                </div>
              </div>
              <div className="row g-2">
                <div className="col-md-6">
                  <TextInput
                    label="Birthdate"
                    type="date"
                    name="birthdate"
                    placeholder="Enter BOD"
                  />
                </div>
                <div className="col-md-6">
                  <TextInput
                    label="Number"
                    type="number"
                    name="number"
                    placeholder="Enter contact number"
                  />
                </div>
              </div>
              <Button type="submit">{editingUser ? "Edit" : "Add"}</Button>
            </Form>
          </Formik>
      </Card>
      <Card header="User List">
      {usersData.length === 0 ? (
            <p>No user added</p>
          ) : (
            <Table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Birthdate</th>
                  <th>Number</th>
                  <th>Edit User</th>
                  <th>Delete User</th>
                </tr>
              </thead>
              <tbody>
                {usersData.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.birthdate}</td>
                    <td>{user.number}</td>
                    <td onClick={() => setEditingUser(user)}>Edit</td>
                    <td
                      onClick={() =>
                        dispatch(deleteUserToFirebase(user.id))
                          .unwrap()
                          .then(() =>
                            toast.success("User deleted successfully")
                          )
                          .catch((err) => toast.error(err))
                      }
                    >
                      Delete
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
      </Card>
      {/* <Card className="card">
        <div className="card-header">
          <div className="card-title mb-0">Create User</div>
        </div>
        <div className="card-body">
          
        </div>
      </Card> */}
      {/* <Card className="card">
        <div className="card-header">
          <div className="card-title mb-0">User List</div>
        </div>
        <div className="card-body">
          
        </div>
      </Card> */}
    </>
  );
};
