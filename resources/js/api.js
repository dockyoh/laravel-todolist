// const API_URL = "http://127.0.0.1:8000/api/tasks";
const API_URL = "http://127.0.0.1/api/tasks";
const token = localStorage.getItem("myToken");

// FETCH/GET DATA FROM API
export async function fetchData() {
    try {
        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            if (response.status === 401) {
                // alert("PLEASE LOGIN FIRST");
                window.location.href = "/Users/login";
                return;
            }
            // throw new Error(`HTTP error status: ${response.status}`);
        }

        const result = await response.json();

        const data = result.data;

        if (response.ok) {
            return data;
        }
    } catch (error) {
        console.error("Error Fetching Task ", error);
    }
}

export async function fetchEditData(id) {
    try {
        const response = await fetch(`/api/tasks/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            if (response.status === 401) {
                // alert("PLEASE LOGIN FIRST");
                window.location.href = "/Users/login";
                return;
            }
            // throw new Error(`http error status: ${response.status}`);
        }

        const reuslt = await response.json();

        const data = reuslt.data;

        return data;
    } catch (error) {
        console.error("Failed to fetch edit data", error);
    }
}

// CREATE DATA FROM API
export async function addTask(data) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            if (response.status === 401) {
                alert("PLEASE LOGIN FIRST");
                window.location.href = "/Users/login";
                return;
            }
            // throw new Error(`http error status: ${response.status}`);
        }

        if (response.ok) {
            return response.ok;
        }
    } catch (error) {
        console.error("faild to fetch and add data", error);
    }
}

// DELETE DATA FROM API
export async function deleteTask(id) {
    try {
        const response = await fetch(`/api/tasks/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            if (response.status === 401) {
                alert("PLEASE LOGIN FIRST");
                window.location.href = "/Users/login";
                return;
            }
            // throw new Error(`http error status: ${response.status}`);
        }

        if (response.ok) {
            return response.ok;
        }
    } catch (error) {
        console.error("Failed to fetch and delete data", error);
    }
}

// EDIT/DONE DATA FROM API
export async function doneTask(id) {
    const done = {
        is_completed: true,
    };

    try {
        const response = await fetch(`/api/tasks/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(done),
        });

        if (!response.ok) {
            if (response.status === 401) {
                alert("PLEASE LOGIN FIRST");
                window.location.href = "/Users/login";
                return;
            }
            // throw new Error(`http error status: ${response.status}`);
        }

        if (response.ok) {
            return response.ok;
        }
    } catch (error) {
        console.error("Failed to fetch and edit data", error);
    }
}

// EDIT DATA FROM API
export async function editTask(id, formData) {
    try {
        const response = await fetch(`/api/tasks/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            if (response.status === 401) {
                alert("PLEASE LOGIN FIRST");
                window.location.href = "/Users/login";
                return;
            }
            // throw new Error(`http error status: ${response.status}`);
        }

        if (response.ok) {
            return response.ok;
        }
    } catch (error) {
        console.error("Failed to fetch and edit data", error);
    }
}

export async function register(data) {
    try {
        const response = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        });

        // if (!response.ok) {
        //     throw new Error(`HTTP error status: ${response.status}`);
        // }

        const result = await response.json();

        if (!response.ok) {
            if (response.status === 422 && result.errors) {
                const errorMessages = Object.values(result.errors).flat();
                localStorage.setItem(
                    "registerErrors",
                    JSON.stringify(errorMessages),
                );
            }
            return false;
        }

        if (response.ok) {
            return response.ok;
        }
    } catch (error) {
        console.error("FAILED TO FETCH-REGISTER USER", error);
    }
}

export async function login(data) {
    try {
        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!response.ok) {
            if (response.status === 401) {
                const errorMessage = Object.values(result).flat();
                localStorage.setItem(
                    "loginError",
                    JSON.stringify(errorMessage),
                );
            }
            return false;
        }

        if (response.ok) {
            localStorage.setItem("myToken", result.token);
            return response.ok;
        }
    } catch (error) {
        console.error("FETCH LOGIN FAILED: ", error);
    }
}

export async function logout() {
    if (!token) {
        window.location.href = "/Users/login";
        return;
    }

    try {
        const response = await fetch("/api/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP status error: ${response.status}`);
        }

        if (response.ok) {
            localStorage.clear();
            window.location.href = "/Users/login";
            return;
        }
    } catch (error) {
        console.error("FAILED FETCH LOGOUT ", error);
    }
}
