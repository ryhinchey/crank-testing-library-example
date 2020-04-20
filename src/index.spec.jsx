/** @jsx createElement */
import {createElement} from "@bikeshaving/crank";
import { render } from 'crank-testing-library';
import Greeting from './';

test('renders name', () => {    
  const { getByText } = render(<Greeting />);
  
  expect(getByText("Hello World")).toBeTruthy();
});