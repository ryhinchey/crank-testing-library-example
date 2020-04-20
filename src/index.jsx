/** @jsx createElement */
import {createElement, Fragment, Raw} from "@bikeshaving/crank";
import {renderer} from "@bikeshaving/crank/dom";

export default function Greeting({name="World"}) {
  return (
    <div>Hello {name}</div>
  );
}
