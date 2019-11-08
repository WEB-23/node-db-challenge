exports.seed = function(knex) {
	return (
		knex('tasks')
			// deletes all existing entires
			.truncate()
			.then(() => {
				// inserts seed entries
				return knex('tasks').insert([
					{
						description: 'Go the gym',
						notes: 'Its chest day',
						completed: true,
						project_id: 3
					},
					{
						description: 'Take pre-workout',
						completed: true,
						notes: "I'm ready!!!",
						project_id: 3
					},
					{
						description: 'Pass my sprint challenge',
						notes: 'Study hard',
						completed: false,
						project_id: 2
					},
					{
						description: 'Fast for 24 hours',
						notes: 'its not easy but its worth it.',
						completed: true,
						project_id: 2
					},
					{
						description: 'find a side job to make some extra cash',
						notes: 'start looking early in the morning',
						completed: true,
						project_id: 1
					},
					{
						description: ' this is a description',
						notes: '',
						completed: false,
						project_id: 1
					},
					{
						description: 'make some food after 24 hr fast.',
						notes: 'avocado, chicken potatos.',
						completed: false,
						project_id: 1
					}
				]);
			})
	);
};
