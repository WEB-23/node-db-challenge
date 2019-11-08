exports.seed = function(knex) {
	return (
		knex('resources')
			// deletes all existing entries
			.truncate()
			.then(() => {
				// inserts seed entries
				return knex('resources').insert([
					{
						name: 'Hydro Flask',
						description: 'Keeps my water cold or coffee hot.'
					},
					{ name: 'Bead Bracelet', description: 'supposed to create positivity.' },
					{ name: 'Laptop', description: 'Alienware' },
					{ name: 'Car ', description: 'Drives me to anywhere I need to get to.' },
					{
						name: 'Lambda Student',
						description: 'hoping to start a career in software dev the future.'
					}
				]);
			})
	);
};
