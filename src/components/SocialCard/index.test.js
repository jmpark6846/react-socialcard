import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SocialCard from '.';
import { metaTagData } from '../../constants';
Enzyme.configure({ adapter: new Adapter() });
const props = {
		metaTags: {
			description: "Facts about React that should be known before using Redux (or MobX). Most important: Learn React first, then opt-in Redux but only if you need it. There are various techniques in React.js for scaling your local state management. Only if these are not sufficient, use a library like Redux ...",
			image: {
				url:"https://www.robinwieruch.de/img/posts/learn-react-before-using-redux/banner_640.jpg",
			},
			title: "8 things to learn in React before using Redux - RWieruch",
			type: "website",
			url: "https://www.robinwieruch.de/learn-react-before-using-redux/",
		}
	}

describe('SocialCard', ()=>{
	
	it('renders without crashing', () => {
	  const div = document.createElement('div');

	  ReactDOM.render(<SocialCard {...props}/>, div);
	  ReactDOM.unmountComponentAtNode(div);
	});

	test('has a valid snapshot', () => {
		const component = renderer.create(<SocialCard {...props}/>);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('shows socialcard', ()=>{
		const element = shallow(
			<SocialCard {...props}/>
		);
		expect(element.find('.card-wrapper').length).toBe(1);
	});
});

