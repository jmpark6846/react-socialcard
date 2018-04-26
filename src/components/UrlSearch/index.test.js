import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import UrlSearch from '.';

describe('UrlSearch', ()=>{
	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<UrlSearch />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});

	test('has a valid snapshot', () => {
		const component = renderer.create(<UrlSearch />);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});