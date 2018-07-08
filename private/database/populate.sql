INSERT INTO users(username, password) VALUES 
('TEST USER', '0000000000'),
('TEST FOLLOWER', '0000000000');

INSERT INTO boards(name) VALUES 
('Skateboard'),
('Longboard - Long Distance'),
('Longboard - Downhill'),
('Snowboard');

INSERT INTO users_followers(me, following) VALUES 
((SELECT id FROM users WHERE username = 'TEST USER'), ((SELECT id FROM users WHERE username = 'TEST FOLLOWER')));

INSERT INTO tricks(name, board) VALUES 
('Just Riding', (SELECT id FROM boards WHERE name = 'Skateboard')),
('Ollie', (SELECT id FROM boards WHERE name = 'Skateboard')),
('Frontside 180', (SELECT id FROM boards WHERE name = 'Skateboard')),
('Backside 180', (SELECT id FROM boards WHERE name = 'Skateboard')),
('Shuvit', (SELECT id FROM boards WHERE name = 'Skateboard')),
('Pop Shuvit', (SELECT id FROM boards WHERE name = 'Skateboard'));

INSERT INTO proficancies(proficieny_title, proficieny_notes) VALUES
('Never Tried', 'I have never even attempted.'),
('Attempted', 'I have attempted this.'),
('Achieved', 'I have done this atleast once'),
('Comfortable', 'I have done this several times but it still requires some concentration.'),
('Mastered', 'I have mastered this and can do it without even thinking about it.');

INSERT INTO users_tricks(username, trick, proficieny, notes) VALUES 
(
    (SELECT id FROM users WHERE username = 'TEST USER'),
    (SELECT id FROM tricks WHERE name = 'Just Riding'),
    (SELECT id FROM proficancies WHERE proficieny_title = 'Comfortable'),
    'I am very comfortable on a Longboard but I am just now getting comfortable with a SkateBoard.'
),
(
    (SELECT id FROM users WHERE username = 'TEST USER'),
    (SELECT id FROM tricks WHERE name = 'Ollie'),
    (SELECT id FROM proficancies WHERE proficieny_title = 'Attempted'),
    'I have made some small attempts at it but I could try harder.'
);