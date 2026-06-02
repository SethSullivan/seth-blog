<script lang="ts">
	import * as config from '$lib/config';
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section class="hero">
	<p class="eyebrow">Researcher • Builder • Writer</p>
	<h1>Seth Sullivan</h1>
	<p class="lead">
		PhD student studying motor control and decision-making. I write about computational modeling,
		human movement, and tools that make research workflows easier.
	</p>
	<div class="hero-actions">
		<a class="primary" href="/blog">Read the blog</a>
		<a class="ghost" href="/about">About me</a>
	</div>
</section>

<section class="grid">
	<article class="card about-card surface-3">
		<h2>About</h2>
		<p>
			I build data-driven tools for scientists and teams. My work blends neuroscience, interaction
			design, and practical software that turns experiments into insight.
		</p>
		<div class="meta">
			<span>Decision-making</span>
			<span>Human movement</span>
			<span>Computational modeling</span>
		</div>
	</article>

	<article class="card blog-card surface-2">
		<h2>Latest writing</h2>
		<p>
			Notes on research workflows, tools I build, and ideas from the lab. Essays are short,
			practical, and focused on how we move and decide.
		</p>
		<a class="text-link" href="/blog">Browse posts →</a>
	</article>
</section>

<section class="projects">
	<div class="section-header">
		<h2>Projects</h2>
		<p>Selected tools and experiments I have been building recently.</p>
	</div>
	<div class="project-grid">
		<article class="card project-card surface-3">
			<h3>Participant Scheduler</h3>
			<p>
				Scheduling system for lab studies that automates availability, reminders, and recruitment
				pipelines.
			</p>
			<span class="tag">Research ops</span>
		</article>
		<article class="card project-card surface-3">
			<h3>Finance Dashboard</h3>
			<p>
				Personal analytics for budgets, grant tracking, and forecasting expenses across projects.
			</p>
			<span class="tag">Data visualization</span>
		</article>
		<article class="card project-card surface-3">
			<h3>KNCT</h3>
			<p>A toolkit exploring kinematic coordination and teamwork metrics in joint tasks.</p>
			<span class="tag">Motor control</span>
		</article>
	</div>
</section>

<style>
	:global(body) {
		background-image:
			radial-gradient(circle at top right, rgba(255, 163, 71, 0.2), transparent 55%),
			linear-gradient(
				180deg,
				rgba(20, 22, 26, 0.7) 0%,
				rgba(20, 22, 26, 0.2) 45%,
				rgba(20, 22, 26, 0) 100%
			);
	}

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

	.section-header p {
		max-inline-size: 48ch;
		color: var(--text-2);
	}

	.project-grid {
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
		background: radial-gradient(circle, rgba(255, 163, 71, 0.3), transparent 70%);
		opacity: 0.7;
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
