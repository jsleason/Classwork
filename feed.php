$mysqli = new mysqli("localhost", "root", "", "DMUM");
$query = "SELECT * FROM checkin";
$dbresult = $mysqli->query($query);
 
while($row = $dbresult->fetch_array(MYSQLI_ASSOC)){
 
    $data[] = array(
        'checkinid' => $row['id'],
        'eventId' => $row['eventId']
        'participantId' => $row['participantId']
    );
}
 
if($dbresult){
    $result = "{'success':true, 'data':" . json_encode($data) . "}";             
}
else {
    $result = "{'success':false}";
}