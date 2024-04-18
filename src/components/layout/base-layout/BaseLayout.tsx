import { type PropsWithChildren } from "react";
import TopNavigation from "./TopNavigation";

const BaseLayout = (props: PropsWithChildren) => {
  return (
    <div>
      <header className="w-full">
        <TopNavigation />
      </header>
      <main>{props.children}</main>
    </div>
  );
};

export default BaseLayout;
