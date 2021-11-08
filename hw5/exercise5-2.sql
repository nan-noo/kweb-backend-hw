-- 1.
SELECT users.id, users.name, tickets.seat_number 
FROM tickets
INNER JOIN users ON users.id = tickets.user AND tickets.train = 11
ORDER BY tickets.seat_number;

-- 2.
SELECT users.id, users.name, count(tickets.train) AS trains_count, sum(trains.distance) / 10 AS total_distance 
FROM users
INNER JOIN tickets ON tickets.user = users.id
INNER JOIN trains ON trains.id = tickets.train
GROUP BY users.id
ORDER BY total_distance DESC LIMIT 6;

-- 3.
SELECT trains.id, types.name as type, src.name AS src_stn, dst.name AS dst_stn, Timediff(arrival, departure) AS travel_time
FROM trains
INNER JOIN types ON types.id = trains.type
INNER JOIN stations AS src ON src.id = source
INNER JOIN stations AS dst ON dst.id = destination
ORDER BY travel_time DESC LIMIT 6;

-- 4.
SELECT types.name as type, src.name AS src_stn, dst.name AS dst_stn, departure, arrival, 
Round(types.fare_rate / 100 * trains.distance / 10, -2) AS fare
FROM trains
INNER JOIN types ON types.id = trains.type
INNER JOIN stations AS src ON src.id = source
INNER JOIN stations AS dst ON dst.id = destination
ORDER BY departure;

-- 5.
SELECT trains.id, types.name as type, src.name AS src_stn, dst.name AS dst_stn, count(tickets.seat_number) AS occupied, types.max_seats AS maximum
FROM trains
INNER JOIN types ON types.id = trains.type
INNER JOIN stations AS src ON src.id = source
INNER JOIN stations AS dst ON dst.id = destination
INNER JOIN tickets ON tickets.train = trains.id
GROUP BY tickets.train
ORDER BY trains.id;

-- 6.
SELECT trains.id, types.name as type, src.name AS src_stn, dst.name AS dst_stn, count(tickets.seat_number) AS occupied, types.max_seats AS maximum
FROM trains
INNER JOIN types ON types.id = trains.type
INNER JOIN stations AS src ON src.id = source
INNER JOIN stations AS dst ON dst.id = destination
LEFT JOIN tickets ON tickets.train = trains.id
GROUP BY tickets.train
ORDER BY trains.id;