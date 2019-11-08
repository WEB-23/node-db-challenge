exports.seed = function(knex) {
	return (
		knex('projects')
			// deletes all existing entries
			.truncate()
			.then(() => {
				// inserts seed entry
				return knex('projects').insert([
					{
						name: 'Backend sprint',
						description: "Seems easy, don't under estimate",
						completed: false
					},
					{
						name: 'Wash car',
						description: "can't have a dirty car",
						completed: false
					},
					{ name: 'Put together diet MACROS', description: "Let's get lean", completed: true }
				]);
			})
	);
};
