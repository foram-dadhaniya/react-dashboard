import { useEffect, useState } from "react";
import { Formik, FormikHelpers, Form } from "formik";
import { TextInput } from "../../components/form/TextInput";
import { Button } from "../auth/Auth.styles";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { UserInputValues } from "../../types/types";
import { addUserToFirebase, fetchUsersFromFirebase, editUserToFirebase, deleteUserToFirebase } from "./usersSlice";
import { toast } from "react-toastify";

export const UserList: React.FC = () => {
  const [editingUser, setEditingUser] = useState<UserInputValues | null>(null);
  const usersData = useSelector((state: RootState) => state.users.users );
  const dispatch = useDispatch<AppDispatch>();
  const userInitialValues: UserInputValues = {
    id:"",
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
    if(editingUser){
        dispatch(editUserToFirebase(values));
        setEditingUser(null);
    } else {
        dispatch(addUserToFirebase({...values}));
    }  
    actions.resetForm();
  };

  return (
    <>
      <Formik initialValues={editingUser || userInitialValues} enableReinitialize onSubmit={handleUserSubmit}>
        <Form>
          <TextInput
            label="Name"
            type="text"
            name="name"
            placeholder="Enter full name"
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            placeholder="Enter email"
          />
          <TextInput
            label="Birthdate"
            type="date"
            name="birthdate"
            placeholder="Enter BOD"
          />
          <TextInput
            label="Number"
            type="number"
            name="number"
            placeholder="Enter contact number"
          />
          <Button type="submit">{editingUser ? 'Edit' : 'Add' }</Button>
        </Form>
      </Formik>
      {usersData.length === 0 ? (
            <p>No user added</p>
          ) : (
            <table>
              <tbody>
                {usersData.map(user => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.birthdate}</td>
                    <td>{user.number}</td>
                    <td onClick={() => setEditingUser(user)}>Edit</td>
                    <td onClick={() => dispatch(deleteUserToFirebase(user.id)).unwrap()
  .then(() => toast.success("User deleted successfully"))
  .catch((err) => toast.error(err))}>Delete</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
    </>
  );
};
