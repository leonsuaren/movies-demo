import { shallow } from 'enzyme';
import { ServerError } from './ServerError';

test('render without error', () => {
  const wrapper = shallow(<ServerError />);
  const serverErrorComponent = wrapper.find("[data-test='server-error-component']");
  expect(serverErrorComponent.length).toBe(1);
});