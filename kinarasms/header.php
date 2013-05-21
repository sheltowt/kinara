<html>
<head>
<title>Kinara Capital - SMS Reminders</title>

<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,400,600,700' rel='stylesheet' type='text/css'>
<link rel="stylesheet" id="shopp-css"  href="/css/style.css" type="text/css" media="screen" />
<link rel="stylesheet" id="shopp-css"  href="/css/jquery.wijmo-complete.2.2.2.css" type="text/css" media="screen" />
<link rel="stylesheet" id="shopp-css"  href="/css/jquery-wijmo-rocket.css" type="text/css" media="screen" />


<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script type="text/javascript" src="/js/jquery.plugins.js"></script>
<script type="text/javascript" src="/js/base.js"></script>
<script type="text/javascript" src="/js/jquery-ui-1.9.1.custom.min.js"></script>
<script type="text/javascript" src="/js/jquery.wijmo-complete.all.2.2.2.min.js"></script>
<script type="text/javascript" src="/js/jquery.wijmo-open.all.2.2.2.min.js"></script>

</head>
<body>

<div id="containerWrap">
<div id="container">

	<div id="headerWrap">
		<div id="header">
			<a href="/" id="companyLogo">
				<img src="/images/logo.png" alt="Kinara Capital Messaging App" /><br />
				<span class="siteTitle">SMS Application</span>
			</a>
			
			<?php if( is_logged_in() ) { ?>
			<ul id="myMenu">
				<li class="last"><a href="/user-logout.php"><span class="lsf">logout</span>Logout</a></li>
			</ul>
			<?php } ?>
			
		</div>
	</div>
	
	<div id="navigationWrap">
		<div id="navigation" class="navigationStyle">
			<ul class="menu">
				<li><a href="/"><span class="lsf">home</span></a></li>
				<?php if( is_logged_in() ) : ?>
				<li><a href="/entities/"><span class="lsf">globe</span> Entities</a></li>
				<li><a href="/payments/"><span class="lsf">dailycalendar</span> Scheduled Payments</a></li>
				<li><a href="/message_templates/"><span class="lsf">comments</span> Message Templates</a></li>
				<?php if( is_admin_user() ) : ?>
				<li><a href="/users/"><span class="lsf">users</span> Kinara Users </a></li>
				<?php endif; ?>
				<?php endif; ?>
			</ul>
		</div>
	</div>