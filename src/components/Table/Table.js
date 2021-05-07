import { React, useState } from "react";
import { useFormik } from "formik";
import { FiTrash2 } from "react-icons/fi";
import * as Yup from "yup";
import {
  Form,
  FormRow,
  InputLabel,
  InputText,
  TextArea,
  InputError,
  Center,
  Option,
  Select,
  FormTwoColums,
  IconWrapp,
} from "../../lib/style/generalStyles.js";
import {
  TableWrapper,
  TableHeader,
  TableContent,
  Tr,
  Td,
  Th,
  EmptyTable,
  EmptyTableText,
} from "./TableStyles";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import ButtonTable from "../ButtonTable/ButtonTable";

const firm = ["Speck", "Five", "Infinum", "Cinnamon"];
const options = [
  { value: "marketing", label: "#marketing" },
  { value: "frontend", label: "#frontend" },
  { value: "design", label: "#design" },
  { value: "backend", label: "#backend" },
];
const Table = () => {
  const [isOpened, SetIsOpened] = useState(false);
  const [events, setEvents] = useState([]);

  const formik = useFormik({
    initialValues: {
      id: 1,
      title: "",
      description: "",
      date: "",
      categories: "",
      timeFrom: "",
      timeTo: "",
      capacity: "",
      company: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
      date: Yup.string().required("Date is required"),
      categories: Yup.string().required("Categories is required"),
      timeFrom: Yup.string().required("TimeFrom is required"),
      timeTo: Yup.string().required("TimeTo is required"),
      capacity: Yup.string().required("Capacity is required"),
      company: Yup.string().required("Company is required"),
    }),

    onSubmit: (values, { resetForm }) => {
      setEvents([...events, values]);
      SetIsOpened(false);
      resetForm({});
    },
  });

  const handleDeleteEvent = (index) => {
    let eventArray = [...events];
    eventArray.splice(index, 1);
    setEvents(eventArray);
  };

  return (
    <>
      <Center>
        {isOpened && (
          <Modal title="Add event" hidePopup={() => SetIsOpened(false)}>
            <Form onSubmit={formik.handleSubmit}>
              <FormRow marginBottom={true}>
                <InputLabel htmlFor="title">Title</InputLabel>
                <InputText
                  id="title"
                  type="text"
                  {...formik.getFieldProps("title")}
                />
                {formik.touched.title && formik.errors.title ? (
                  <InputError>{formik.errors.title}</InputError>
                ) : null}
              </FormRow>
              <FormRow marginBottom={true}>
                <InputLabel htmlFor="desctiption">Description</InputLabel>
                <TextArea
                  id="description"
                  {...formik.getFieldProps("description")}
                />
                {formik.touched.description && formik.errors.description ? (
                  <InputError>{formik.errors.description}</InputError>
                ) : null}
              </FormRow>
              <FormRow marginBottom={true}>
                <FormTwoColums>
                  <FormRow>
                    <InputLabel htmlFor="categories">Categories</InputLabel>
                    <Select
                      id="categories"
                      {...formik.getFieldProps("categories")}
                    >
                      <Option value="">Select...</Option>
                      {options.map((category) => (
                        <Option key={category.value} value={category.value}>
                          {category.label}
                        </Option>
                      ))}
                    </Select>
                    {formik.touched.categories && formik.errors.categories ? (
                      <InputError>{formik.errors.categories}</InputError>
                    ) : null}
                  </FormRow>
                  <FormRow>
                    <InputLabel htmlFor="date">Date</InputLabel>
                    <InputText
                      id="date"
                      type="text"
                      {...formik.getFieldProps("date")}
                    />
                    {formik.touched.date && formik.errors.date ? (
                      <InputError>{formik.errors.date}</InputError>
                    ) : null}
                  </FormRow>
                </FormTwoColums>
              </FormRow>
              <FormRow marginBottom={true}>
                <FormTwoColums>
                  <FormRow>
                    <InputLabel htmlFor="timeFrom">Time from</InputLabel>
                    <InputText
                      id="timeFrom"
                      type="text"
                      {...formik.getFieldProps("timeFrom")}
                    />
                    {formik.touched.timeFrom && formik.errors.timeFrom ? (
                      <InputError>{formik.errors.timeFrom}</InputError>
                    ) : null}
                  </FormRow>
                  <FormRow>
                    <InputLabel htmlFor="timeTo">Time to</InputLabel>
                    <InputText
                      id="timeTo"
                      type="text"
                      {...formik.getFieldProps("timeTo")}
                    />
                    {formik.touched.timeTo && formik.errors.timeTo ? (
                      <InputError>{formik.errors.timeTo}</InputError>
                    ) : null}
                  </FormRow>
                </FormTwoColums>
              </FormRow>
              <FormRow marginBottom={true}>
                <FormTwoColums>
                  <FormRow>
                    <InputLabel htmlFor="capacity">Capacity</InputLabel>
                    <InputText
                      id="capacity"
                      type="text"
                      {...formik.getFieldProps("capacity")}
                    />
                    {formik.touched.capacity && formik.errors.capacity ? (
                      <InputError>{formik.errors.capacity}</InputError>
                    ) : null}
                  </FormRow>
                  <FormRow>
                    <InputLabel htmlFor="company">Company</InputLabel>
                    <Select id="company" {...formik.getFieldProps("company")}>
                      <Option value="">Select...</Option>
                      {firm.map((prop) => (
                        <Option value={prop} key={prop}>
                          {prop}
                        </Option>
                      ))}
                    </Select>
                    {formik.touched.company && formik.errors.company ? (
                      <InputError>{formik.errors.company}</InputError>
                    ) : null}
                  </FormRow>
                </FormTwoColums>
              </FormRow>
              <Button text="Add event" />
            </Form>
          </Modal>
        )}
      </Center>
      <ButtonTable text="Add event" showPopUp={() => SetIsOpened(true)} />

      {events.length > 0 ? (
        <TableWrapper>
          <TableHeader>
            <Tr>
              <Th>ID</Th>
              <Th>Naslov</Th>
              <Th>Datum</Th>
              <Th>Vrijeme od</Th>
              <Th>Vrijeme do</Th>
              <Th>Kapacitet</Th>
              <Th>Firma</Th>
              <Th></Th>
            </Tr>
          </TableHeader>
          {events.map((event, index) => (
            <TableContent>
              <Tr key={index}>
                <Td>{event.id}</Td>
                <Td>{event.title}</Td>
                <Td>{event.date}</Td>
                <Td>{event.timeFrom}</Td>
                <Td>{event.timeTo}</Td>
                <Td>{event.capacity}</Td>
                <Td>{event.company}</Td>
                <Td>
                  <IconWrapp onClick={() => handleDeleteEvent(index)}>
                    <FiTrash2 />
                  </IconWrapp>
                </Td>
              </Tr>
            </TableContent>
          ))}
        </TableWrapper>
      ) : (
        <EmptyTable>
          <EmptyTableText>The table is empty!</EmptyTableText>
        </EmptyTable>
      )}
    </>
  );
};

export default Table;
