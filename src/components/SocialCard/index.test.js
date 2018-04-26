import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SocialCard from '.';

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
});