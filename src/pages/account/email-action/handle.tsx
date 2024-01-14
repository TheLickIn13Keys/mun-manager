import { navigate, PageProps } from "gatsby";
import React, { useState } from "react";
import { AuthLayout } from "../../../components/layout";

export default function HandleEmailActionPage({ location }: PageProps) {
	const [error, setError] = useState(false);

	React.useEffect(() => {
		const params = new URLSearchParams(location.search);
		const mode = params.get("mode");
		if (
			mode &&
			[
				"resetPassword",
				"recoverEmail",
				"verifyEmail",
				"verifyAndChangeEmail",
			].includes(mode)
		) {
			const pageMap = {
				resetPassword: "reset-password",
				recoverEmail: "recover-email",
				verifyEmail: "verify-email",
				verifyAndChangeEmail: "confirm-email-change",
			};
			navigate(
				"/account/email-action/" +
					pageMap[mode as keyof typeof pageMap],
				{
					state: {
						code: params.get("oobCode"),
						continueURL: params.get("continueUrl"),
					},
					replace: true,
				}
			);
		} else {
			setError(true);
		}
	}, []);

	return (
		<AuthLayout title="Loading...">
			{!error && <h1 className="text-3xl font-bold">Loading...</h1>}
			{error && (
				<>
					<h1 className="text-3xl font-bold">
						You found a broken link!
					</h1>
					<p>
						This page can only be accessed via special links that we
						send you. If you followed a link to get to this page,
						please email{" "}
						<a
							href="mailto:dublinmodelun@gmail.com "
							className="link"
						>
							dublinmodelun@gmail.com 
						</a>{" "}
						and let us know how you got to this page.
					</p>
				</>
			)}
		</AuthLayout>
	);
}
