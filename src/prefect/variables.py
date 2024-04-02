from typing import List, Optional

from typing_extensions import Self

from prefect.client.orchestration import PrefectClient
from prefect.client.schemas.actions import VariableCreate as VariableRequest
from prefect.client.utilities import get_or_create_client
from prefect.utilities.asyncutils import sync_compatible


class Variable(VariableRequest):
    """
    docstring
    """

    @classmethod
    @sync_compatible
    async def get_or_create(
        cls,
        name: str,
        value: Optional[str] = None,
        default: Optional[str] = None,
        tags: Optional[List[str]] = None,
    ) -> Optional[str]:
        """
        docstring tho
        """
        variable = await cls.get(name=name)
        if variable:
            print("shit existed")
            return variable
        else:
            print("it aint existed")
            variable = await cls.set(name, value, tags)
            print("we created it!")
            return variable if variable else default

    @classmethod
    @sync_compatible
    async def set(
        cls,
        name: str,
        value: Optional[str] = None,
        default: Optional[str] = None,
        tags: Optional[List[str]] = None,
    ) -> Optional[str]:
        """
        docstring tho
        """
        variable = await cls._set_variable_by_name(name, value, tags)
        return variable.value if variable else default

    @classmethod
    @sync_compatible
    async def get(cls, name: str, default: Optional[str] = None) -> Optional[str]:
        """
        Get a variable by name. If doesn't exist return the default.
        ```
            from prefect import variables

            @flow
            def my_flow():
                var = variables.get("my_var")
        ```
        or
        ```
            from prefect import variables

            @flow
            async def my_flow():
                var = await variables.get("my_var")
        ```
        """
        variable = await cls._get_variable_by_name(name=name)
        return variable.value if variable else default

    @classmethod
    @sync_compatible
    async def _get_variable_by_name(
        cls,
        name: str,
        client: Optional[PrefectClient] = None,
    ):
        client, _ = get_or_create_client(client)
        variable = await client.read_variable_by_name(name)
        return variable

    @classmethod
    async def _set_variable_by_name(
        self: Self,
        name: str,
        value: str,
        tags: Optional[List[str]],
        client: Optional[PrefectClient] = None,
    ):
        client, _ = get_or_create_client(client)
        var = (VariableRequest(name=name, value=value, tags=tags),)
        variable = await client.create_variable(variable=var)
        return variable
