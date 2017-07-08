<?php  
	$bundle = array(
		array(
			'type'=>'bear',
			'name'=> 'Ice Bear',
			'hobby'=> 'Cooking', 
			'score'=> 10, 
			'img'=>'iceBear.jpg', 
			'modal'=> 'view/BearModal.html'),
		array(
			'type'=> 'seal',
			'name'=> 'Ong Ong', 
			'hobby'=> 'fishing', 
			'score'=> 9, 
			'img'=> 'ongong.jpg', 
			'modal'=> 'view/OngModal.html'),
		array(
        	'type'=> 'fish', 
        	'name'=> 'Nemo', 
        	'hobby'=> 'cleaning', 
        	'score'=> 8, 
        	'img'=>'nemo.png', 
        	'modal'=> 'view/NemoModal.html'),
        array(
			'type'=> 'bear', 
			'name'=> 'Grizzy Bear', 
			'hobby'=> 'sleeping', 
			'score'=> 12, 
			'img'=> 'grizzybear.png', 
			'modal'=> 'view/GrizzyBearModal.html'),
         array(
			'type'=> 'bear', 
			'name'=> 'Panda Bear', 
			'hobby'=> 'eating', 
			'score'=> 11, 
			'img'=>'pandaBear.png', 
			'modal'=> 'view/PandaBearModal.html'),
         array(
			'type'=> 'platypus', 
			'name'=> 'Perry', 
			'hobby'=> 'fighting', 
			'score'=> 15, 
			'img'=>'perry.png', 
			'modal'=> 'view/PerryModal.html'));
	echo json_encode($bundle);
?>