// import type { Handle } from '@sveltejs/kit';
// import { dev } from '$app/environment';
// import * as auth from '$lib/server/auth.js';
//
// const handleAuth: Handle = async ({ event, resolve }) => {
// 	const sessionId = event.cookies.get(auth.sessionCookieName);
// 	if (!sessionId) {
// 		event.locals.user = null;
// 		event.locals.session = null;
// 		return resolve(event);
// 	}
//
// 	const { session, user } = await auth.validateSession(sessionId);
// 	if (session) {
// 		event.cookies.set(auth.sessionCookieName, session.id, {
// 			path: '/',
// 			sameSite: 'lax',
// 			httpOnly: true,
// 			expires: session.expiresAt,
// 			secure: !dev
// 		});
// 	} else {
// 		event.cookies.delete(auth.sessionCookieName, { path: '/' });
// 	}
//
// 	event.locals.user = user;
// 	event.locals.session = session;
//
// 	return resolve(event);
// };
//
// export const handle: Handle = handleAuth;

import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { handleClerk } from 'clerk-sveltekit/server';
import { CLERK_SECRET_KEY } from '$env/static/private';

export const handle: Handle = sequence(
	handleClerk(CLERK_SECRET_KEY, {
		debug: true,
		protectedPaths: ['/admin'],
		signInUrl: '/sign-in'
	})
);
