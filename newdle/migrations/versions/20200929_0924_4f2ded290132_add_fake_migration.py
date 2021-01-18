"""Add fake migration

Revision ID: 4f2ded290132
Revises: d85e02075214
Create Date: 2020-09-29 09:24:38.710150
"""

import sqlalchemy as sa
from alembic import op


# revision identifiers, used by Alembic.
revision = '4f2ded290132'
down_revision = 'd85e02075214'
branch_labels = None
depends_on = None


def upgrade():
    op.add_column(
        'newdles',
        sa.Column('fake_col', sa.String(), server_default='fake', nullable=False),
    )


def downgrade():
    op.drop_column('newdles', 'fake_col')
