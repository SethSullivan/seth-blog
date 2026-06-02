<section class="about">
	<h1>About</h1>
	<p class="lead">
		PhD student studying motor control and decision-making during human-human interaction. I'm
		interested in computer science, computational modeling, human motor behaviour, sports, and
		music.
	</p>

	<div class="timeline">
		<div class="timeline-item">
			<span class="time">Now</span>
			<h2>Risk modeling</h2>
			<p>Applied analytics for forecasting, planning, and decision support.</p>
		</div>
		<div class="timeline-item">
			<span class="time">2021-2026</span>
			<h2>Grad school</h2>
			<p>Motor control, decision-making, and human-human interaction research.</p>
		</div>
		<div class="timeline-item">
			<span class="time">2017-2021</span>
			<h2>Undergrad</h2>
			<p>
				Bachelor's degree in physics from the College of the Holy Cross. Played lots of basketball,
				trained to dunk, and volunteered coaching with the athletic performance team.
			</p>
		</div>
	</div>
</section>

<style>
	.about {
		display: grid;
		gap: var(--size-5);
	}

	.lead {
		max-inline-size: 60ch;
		color: var(--text-2);
		font-size: var(--font-size-3);
	}

	.timeline {
		display: grid;
		gap: var(--size-6);
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
		top: 6px;
		width: 10px;
		height: 10px;
		border-radius: var(--radius-round);
		background: var(--brand);
		box-shadow: 0 0 0 6px color-mix(in srgb, var(--brand) 20%, transparent);
	}

	.timeline-item h2 {
		margin: 0;
		font-size: var(--font-size-3);
	}

	.timeline-item p {
		margin-top: var(--size-2);
		color: var(--text-2);
		max-inline-size: 70ch;
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
</style>
