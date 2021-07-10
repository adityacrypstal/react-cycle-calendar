import "./styles.css";
import { ReactComponent as Left } from "./assets/left.svg";
import { ReactComponent as Right } from "./assets/right.svg";

export default function App() {
  const days = new Array(31).fill().map((e, i) => ({ day: i + 1 }));
  const weeks = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"];
  return (
    <div className="app">
      <div style={styles.header}>
        <Left style={{ width: "20px", height: "20px" }} />
        <div>{"20 Mar - 19 Apr"}</div>
        <Right style={{ width: "20px", height: "20px" }} />
      </div>
      <div style={styles.weekdays}>
        {weeks.map((item) => (
          <div key={item} style={styles.weekday}>
            {item}
          </div>
        ))}
      </div>
      {[0, 1, 2, 3, 4].map((i) => (
        <div style={styles.weekdays}>
          {days.slice(i * 7, (i + 1) * 7).map((item) => (
            <div key={item.day} style={styles.day}>
              {item.day}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
const styles = {
  header: {
    borderTop: "0.1px solid #e5e5e5",
    borderBottom: "0.1px solid #e5e5e5",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    padding: "10px 20px",
    alignItems: "center"
  },
  weekdays: {
    display: "flex",
    flexFlow: "row nowrap",
    paddingTop: "1px 0",
    textOverflow: "ellipsis"
  },
  weekday: {
    width: "calc(100% / 7)",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  day: {
    width: "calc(100% / 7)",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};
