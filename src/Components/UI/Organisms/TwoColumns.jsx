import React from "react";
import { Background } from "../Molecules/Background";

export const TwoColumns = ({ id, firstColumnElements, secondColumnElements, backgroundColor }) => {
  const blockClass = "two-columns";

  const renderColumnElements = (elements) => (
    elements && elements.length > 0
      ? elements.map((element, index) => (
        <React.Fragment key={index}>{element}</React.Fragment>
      ))
      : null
  );

  return (
    <section className={blockClass} id={id}>
      <div className={`${blockClass}__wrapper container`}>
        <div className={`${blockClass}__first`}>
          {renderColumnElements(firstColumnElements)}
        </div>
        <div className={`${blockClass}__second`}>
          {renderColumnElements(secondColumnElements)}
        </div>

      </div>
      <Background
        color={backgroundColor}
      />
    </section>
  )
}
