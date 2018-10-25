
import {ok, badRequest} from 'wix-http-functions';
import wixData from 'wix-data';

export function get_example(request) {
	const response = {
		"headers": {
			"Content-Type": "application/json"
		}
	};

	const text = request.query.text;
	if (text) {
		let parsedText = text.substring(6);
		let item = {};
		
		if (text.startsWith('Title')) {
			item.title = parsedText;
			//item.point = " ";
		} 
		if (text.startsWith('Point')) {
			item.point = parsedText;
			item.title = " "
		}
		wixData.insert('parsedText', item);
		response.body = {gotText: true, text};
		return ok(response);
	}
	response.body = {gotText: false};
	return ok(response);
}
