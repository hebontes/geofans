import {Input} from "@/components/ui/input";

export default function RegisterPage() {

    return (
        <div className="flex min-h-screen justify-center items-center bg-gray-50">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700 text-center">
                    Create an Account
                </h2>
                <p className="mt-1 text-center text-sm text-gray-600">
                    Sign up to
                    get started
                </p>
                <form className="mt-6 space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <Input id="name" type="text" placeholder="Enter your full name"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <Input id="email" type="email" placeholder="Enter your email"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <Input id="password" type="password" placeholder="Enter your password"/>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:outline-none"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-600 hover:underline">
                        Log in
                    </a>
                </p>
            </div>
        </div>
    );
}
