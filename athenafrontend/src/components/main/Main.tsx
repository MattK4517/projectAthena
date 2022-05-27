import { godsDict, singleStats, Values } from "../constant";
import SearchBar from "../SearchBarStuff/SearchBar";
import { useContext } from "react";
import { MainContext } from "../MainContext";
import { Formik, Field, Form, FormikHelpers } from "formik";

export default function Main() {
  const [
    god,
    setGod,
    role,
    setRole,
    rank,
    setRank,
    patch,
    setPatch,
    queueType,
    setQueueType,
    mode,
    setMode,
    matchup,
    setMatchup,
    patches,
    queueTypes,
    modes,
    ranks,
    roles,
    skin,
    setSkin,
    attribute,
    setAttribute,
    items,
    setItems,
  ] = useContext(MainContext);

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      god: god,
      items: items,
      attribute: attribute,
      enemy: matchup,
      role: role,
      patch: patch,
      mode: mode,
    }),
  };

  return (
    <div className="content-section">
      <SearchBar data={Object.keys(godsDict)} />
      {god.map((god: string) => {
        return god + ", ";
      })}
      <Formik
        initialValues={{
          fields: "",
          items: "",
          enemy: "",
          role: "",
          patch: "",
          mode: "",
        }}
        onSubmit={(values: Values) => {
          console.log(values);
          setAttribute([...values.fields.split(",")]);
          setItems([...values.items.split(",")]);
          setMatchup([...values.enemy.split(",")]);
          setRole([...values.role.split(",")]);
          setPatch([...values.patch.split(",")]);
          setMode([...values.mode.split(",")]);
          console.log(requestOptions);
          fetch("/api/generatereport", requestOptions).then((res) =>
            res.json().then((data) => {
              console.log(data);
            })
          );
        }}
      >
        <Form>
          <div className="row">
            <label htmlFor="fields">Fields</label>
            <Field id="fields" name="fields" placeholder="Damage Player" />

            <label htmlFor="items">Items to Include</label>
            <Field id="items" name="items" placeholder="Glad Shield" />
          </div>

          <div className="row">
            <label htmlFor="enemy">Enemies</label>
            <Field id="enemy" name="enemy" placeholder="Achilles" />

            <label htmlFor="role">Role</label>
            <Field id="role" name="role" placeholder="All Roles" />
          </div>

          <div className="row">
            <label htmlFor="patch">Patch</label>
            <Field id="patch" name="patch" placeholder="9.5" />

            <label htmlFor="mode">Mode</label>
            <Field id="mode" name="mode" placeholder="Conquest" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>

      {/* <Form></Form> */}
    </div>
  );
}
