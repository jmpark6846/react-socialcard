import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SocialCard from '.';

Enzyme.configure({ adapter: new Adapter() });

describe('SocialCard', ()=>{

	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<SocialCard />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});

	test('has a valid snapshot', () => {
		const component = renderer.create(<SocialCard />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('shows socialcard', ()=>{
		const element = shallow(
			<SocialCard {...props} />
			);

		expect(element.find('.card-wrapper').length).toBe(1);
	});
});

