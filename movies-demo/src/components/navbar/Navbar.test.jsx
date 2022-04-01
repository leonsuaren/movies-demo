import { shallow } from 'enzyme';
import { Navbar } from './Navbar';

test('renders without error', () => {
  const wrapper = shallow(<Navbar />);
  const navbarComponent = wrapper.find("[data-test='navbar-component']");
  expect(navbarComponent.length).toBe(1);
});
