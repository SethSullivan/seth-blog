<script lang="ts">
	import * as config from '$lib/config';
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section class="hero">
	<h1>Seth Sullivan</h1>
	<p class="lead">
		PhD student studying motor control and decision-making. I write about computational modeling,
		human movement, and tools that make research workflows easier.
	</p>
	<div class="hero-actions">
		<a class="primary" href="/blog">Read the blog</a>
		<a class="ghost" href="/about">About me</a>
	</div>
	<p class="eyebrow">Researcher • Builder • Writer</p>
</section>

<section class="projects">
	<div class="section-header">
		<h2>Projects</h2>
		<p>Apps and tools I have been building recently.</p>
	</div>
	<div class="project-grid">
		<a href="https://knctfriends.com">
			<article class="card project-card surface-3">
				<h3>KNCT</h3>
				<p>
					Social media application that let's you connect with your friends without suggested posts
					and AI generated content.
				</p>
				<span class="tag">Mobile App Development</span>
			</article>
		</a>

		<a href="https://finance-dashboard.sethsully.com">
			<article class="card project-card surface-3">
				<h3>Finance Dashboard</h3>
				<p>Need to plan out your expenses? Give it a try!</p>
				<span class="tag">Dashboard Tool</span>
			</article>
		</a>

		<a href="https://participantscheduler.com">
			<article class="card project-card surface-3">
				<h3>Participant Scheduler</h3>
				<p>An when2meet style web application for scheduling research participants.</p>
				<span class="tag">Research ops</span>
			</article>
		</a>
	</div>
</section>

<section class="papers">
	<div class="section-header">
		<h2>Papers</h2>
		<p>Selected publications and works in progress.</p>
	</div>
	<div class="paper-grid">
		<article class="card paper-card surface-2">
			<h3>Indecisions under a time deadline.</h3>
			<p>We found that people were suboptimal and excessively indecisive. Find out why...</p>
			<span class="tag">Decision-making</span>
		</article>
		<article class="card paper-card surface-2">
			<h3>Motor reflexes use predictions of a partner's future actions</h3>
			<p>.</p>
			<span class="tag">Joint Action</span>
			<span class="tag">Dynamic Game Theory</span>
			<span class="tag">Motor Control</span>
		</article>
		<article class="card paper-card surface-2">
			<h3>Motor reflexes are differentially tuned to collaboration and competition</h3>
			<p>.</p>
			<span class="tag">Joint Action</span>
			<span class="tag">Dynamic Game Theory</span>
			<span class="tag">Motor Control</span>
		</article>
	</div>
</section>

<section class="grid">
	<!-- 	<article class="card about-card surface-3"> -->
	<!-- 		<h2>About</h2> -->
	<!-- 		<p> -->
	<!-- 			I build data-driven tools for scientists and teams. My work blends neuroscience, interaction -->
	<!-- 			design, and practical software that turns experiments into insight. -->
	<!-- 		</p> -->
	<!-- 		<div class="timeline"> -->
	<!-- 			<div class="timeline-item"> -->
	<!-- 				<span class="time">Now</span> -->
	<!-- 				<h3>Risk modeling</h3> -->
	<!-- 				<p>Applied analytics for forecasting, planning, and decision support.</p> -->
	<!-- 			</div> -->
	<!-- 			<div class="timeline-item"> -->
	<!-- 				<span class="time">2021-2026</span> -->
	<!-- 				<h3>Grad school</h3> -->
	<!-- 				<p>Motor control, decision-making, and human-human interaction research.</p> -->
	<!-- 			</div> -->
	<!-- 			<div class="timeline-item"> -->
	<!-- 				<span class="time">2017-2021</span> -->
	<!-- 				<h3>Undergrad</h3> -->
	<!-- 				<p>Built the technical base across computation, behavior, and design.</p> -->
	<!-- 			</div> -->
	<!-- 		</div> -->
	<!-- 		<div class="meta"> -->
	<!-- 			<span>Decision-making</span> -->
	<!-- 			<span>Human movement</span> -->
	<!-- 			<span>Computational modeling</span> -->
	<!-- 		</div> -->
	<!-- 	</article> -->

	<article class="card blog-card surface-2">
		<h2>Latest writing</h2>
		<p>
			Notes on research workflows, tools I build, and ideas from the lab. Essays are short,
			practical, and focused on how we move and decide.
		</p>
		<a class="text-link" href="/blog">Browse posts →</a>
	</article>
</section>

<style>
	.hero {
		display: grid;
		gap: var(--size-4);
		padding: var(--size-8) 0 var(--size-9);
	}

	.eyebrow {
		font-family: var(--font-mono);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		font-size: var(--font-size-0);
		color: var(--text-2);
	}

	.hero h1 {
		font-size: clamp(2.8rem, 5vw, 4.2rem);
		letter-spacing: -0.02em;
		margin: 0;
	}

	.lead {
		max-inline-size: 52ch;
		font-size: var(--font-size-3);
		color: var(--text-2);
	}

	.hero-actions {
		display: flex;
		gap: var(--size-4);
		flex-wrap: wrap;
	}

	.hero-actions a {
		padding: var(--size-3) var(--size-5);
		border-radius: var(--radius-3);
		text-decoration: none;
		font-weight: 600;
	}

	.hero-actions .primary {
		background: var(--brand);
		color: var(--surface-4);
		box-shadow: var(--shadow-3);
	}

	.hero-actions .ghost {
		border: 1px solid var(--border);
		color: var(--text-1);
	}

	.grid {
		display: grid;
		gap: var(--size-6);
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		padding-top: var(--size-9);
	}

	.card {
		border-radius: var(--radius-3);
		padding: var(--size-6);
		box-shadow: var(--shadow-2);
		border: 1px solid color-mix(in srgb, var(--border) 70%, transparent);
	}

	.card h2,
	.card h3 {
		margin-top: 0;
		margin-bottom: var(--size-3);
	}

	.about-card .meta {
		margin-top: var(--size-4);
		display: flex;
		gap: var(--size-3);
		flex-wrap: wrap;
		font-size: var(--font-size-0);
		color: var(--text-2);
	}

	.timeline {
		margin-top: var(--size-5);
		display: grid;
		gap: var(--size-5);
		position: relative;
		padding-left: var(--size-6);
	}

	.timeline::before {
		content: '';
		position: absolute;
		left: 12px;
		top: 6px;
		bottom: 6px;
		width: 2px;
		background: linear-gradient(180deg, var(--brand), transparent 85%);
		opacity: 0.7;
	}

	.timeline-item {
		position: relative;
		padding-left: var(--size-4);
	}

	.timeline-item::before {
		content: '';
		position: absolute;
		left: -1px;
		top: 2px;
		width: 10px;
		height: 10px;
		border-radius: var(--radius-round);
		background: var(--brand);
		box-shadow: 0 0 0 6px color-mix(in srgb, var(--brand) 20%, transparent);
	}

	.timeline-item h3 {
		margin: 0;
		font-size: var(--font-size-2);
	}

	.timeline-item p {
		margin-top: var(--size-2);
		color: var(--text-2);
	}

	.time {
		display: inline-flex;
		align-items: center;
		gap: var(--size-2);
		font-family: var(--font-mono);
		font-size: var(--font-size-0);
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--text-2);
	}

	.blog-card .text-link {
		display: inline-flex;
		margin-top: var(--size-4);
		text-decoration: none;
		color: var(--brand);
		font-weight: 600;
	}

	.projects {
		margin-top: var(--size-9);
		display: grid;
		gap: var(--size-6);
	}

	.papers {
		margin-top: var(--size-9);
		display: grid;
		gap: var(--size-6);
	}

	.section-header p {
		max-inline-size: 48ch;
		color: var(--text-2);
	}

	.project-grid {
		display: grid;
		gap: var(--size-6);
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	}

	.paper-grid {
		display: grid;
		gap: var(--size-6);
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	}

	.project-card {
		position: relative;
		overflow: hidden;
	}

	.project-card::after {
		content: '';
		position: absolute;
		top: -40%;
		right: -20%;
		width: 160px;
		height: 160px;
		/*background: radial-gradient(circle, rgba(255, 163, 71, 0.3), transparent 70%);*/
		opacity: 0.7;
	}

	.paper-card {
		border-style: dashed;
		border-color: color-mix(in srgb, var(--border) 50%, transparent);
		background: color-mix(in srgb, var(--surface-2) 85%, transparent);
	}

	.paper-card h3 {
		font-size: var(--font-size-2);
	}

	.paper-card .tag {
		background: transparent;
		border: 1px solid var(--border);
		color: var(--text-1);
	}

	.tag {
		display: inline-flex;
		margin-top: var(--size-4);
		font-size: var(--font-size-0);
		padding: var(--size-1) var(--size-3);
		border-radius: var(--radius-round);
		background: var(--surface-4);
		color: var(--text-2);
	}

	@media (min-width: 900px) {
		.hero {
			grid-template-columns: minmax(0, 1fr) auto;
			align-items: end;
		}

		.hero-actions {
			justify-content: flex-start;
		}
	}
</style>
