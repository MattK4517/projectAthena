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
      queue_type: queueType,
      rank: rank,
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
          fields: "Damage Player",
          items: "",
          enemy: "",
          role: "Solo",
          patch: "9.5",
          mode: "Conquest",
          queueType: "Ranked",
          rank: "All Ranks",
        }}
        onSubmit={(values: Values) => {
          console.log(values);
          setAttribute([...values.fields.split(",")]);
          setItems([...values.items.split(",")]);
          setMatchup([...values.enemy.split(",")]);
          setRole([...values.role.split(",")]);
          setPatch([...values.patch.split(",")]);
          setMode([...values.mode.split(",")]);
          setQueueType([...values.queueType.split(",")]);
          setRank([...values.rank.split(",")]);
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
            <div className="column">
              <label htmlFor="fields">Fields</label>
              <Field id="fields" name="fields" placeholder="Damage Player" />
            </div>
            <div className="column">
              <label htmlFor="items">Items to Include</label>
              <Field id="items" name="items" placeholder="Glad Shield" />
            </div>
          </div>

          <div className="row">
            <div className="column">
              <label htmlFor="enemy">Enemies</label>
              <Field id="enemy" name="enemy" placeholder="Achilles" />
            </div>
            <div className="column">
              <label htmlFor="role">Role</label>
              <Field id="role" name="role" placeholder="All Roles" />
            </div>
          </div>

          <div className="row">
            <div className="column">
              <label htmlFor="patch">Patch</label>
              <Field id="patch" name="patch" placeholder="9.5" />
            </div>
            <div className="column">
              <label htmlFor="mode">Mode</label>
              <Field id="mode" name="mode" placeholder="Conquest" />
            </div>
          </div>

          <div className="row">
            <div className="column">
              <label htmlFor="queueType">Queue Type</label>
              <Field id="queueType" name="queueType" placeholder="Ranked" />
            </div>
            <div className="column">
              <label htmlFor="rank">Rank</label>
              <Field id="rank" name="rank" placeholder="All Ranks" />
            </div>
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>

      {/* <Form></Form> */}
    </div>
  );
}
