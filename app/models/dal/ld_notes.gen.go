// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package dal

import (
	"context"

	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"gorm.io/gorm/schema"

	"gorm.io/gen"
	"gorm.io/gen/field"

	"gorm.io/plugin/dbresolver"

	"go-zero-single/app/models/models"
)

func newLdNote(db *gorm.DB, opts ...gen.DOOption) ldNote {
	_ldNote := ldNote{}

	_ldNote.ldNoteDo.UseDB(db, opts...)
	_ldNote.ldNoteDo.UseModel(&models.LdNote{})

	tableName := _ldNote.ldNoteDo.TableName()
	_ldNote.ALL = field.NewAsterisk(tableName)
	_ldNote.ID = field.NewInt64(tableName, "id")
	_ldNote.Title = field.NewString(tableName, "title")
	_ldNote.CoverImage = field.NewString(tableName, "cover_image")
	_ldNote.ContentMd = field.NewString(tableName, "content_md")
	_ldNote.Top = field.NewBool(tableName, "top")
	_ldNote.TypeID = field.NewInt64(tableName, "type_id")
	_ldNote.TagIds = field.NewInt64(tableName, "tag_ids")
	_ldNote.NotesStatus = field.NewBool(tableName, "notes_status")
	_ldNote.IsRecommended = field.NewBool(tableName, "is_recommended")
	_ldNote.IsOriginal = field.NewBool(tableName, "is_original")
	_ldNote.Description = field.NewString(tableName, "description")
	_ldNote.Keywords = field.NewString(tableName, "keywords")
	_ldNote.CreateTime = field.NewTime(tableName, "create_time")

	_ldNote.fillFieldMap()

	return _ldNote
}

// ldNote 博客-文章表
type ldNote struct {
	ldNoteDo

	ALL           field.Asterisk
	ID            field.Int64
	Title         field.String // 文章标题
	CoverImage    field.String // 文章封面图片
	ContentMd     field.String // markdown版的文章内容
	Top           field.Bool   // 是否置顶
	TypeID        field.Int64  // 类型
	TagIds        field.Int64  // 标签
	NotesStatus   field.Bool   // 状态
	IsRecommended field.Bool   // 是否推荐
	IsOriginal    field.Bool   // 是否原创
	Description   field.String // 文章简介，最多200字
	Keywords      field.String // 文章关键字，优化搜索
	CreateTime    field.Time   // 添加时间

	fieldMap map[string]field.Expr
}

func (l ldNote) Table(newTableName string) *ldNote {
	l.ldNoteDo.UseTable(newTableName)
	return l.updateTableName(newTableName)
}

func (l ldNote) As(alias string) *ldNote {
	l.ldNoteDo.DO = *(l.ldNoteDo.As(alias).(*gen.DO))
	return l.updateTableName(alias)
}

func (l *ldNote) updateTableName(table string) *ldNote {
	l.ALL = field.NewAsterisk(table)
	l.ID = field.NewInt64(table, "id")
	l.Title = field.NewString(table, "title")
	l.CoverImage = field.NewString(table, "cover_image")
	l.ContentMd = field.NewString(table, "content_md")
	l.Top = field.NewBool(table, "top")
	l.TypeID = field.NewInt64(table, "type_id")
	l.TagIds = field.NewInt64(table, "tag_ids")
	l.NotesStatus = field.NewBool(table, "notes_status")
	l.IsRecommended = field.NewBool(table, "is_recommended")
	l.IsOriginal = field.NewBool(table, "is_original")
	l.Description = field.NewString(table, "description")
	l.Keywords = field.NewString(table, "keywords")
	l.CreateTime = field.NewTime(table, "create_time")

	l.fillFieldMap()

	return l
}

func (l *ldNote) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := l.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (l *ldNote) fillFieldMap() {
	l.fieldMap = make(map[string]field.Expr, 13)
	l.fieldMap["id"] = l.ID
	l.fieldMap["title"] = l.Title
	l.fieldMap["cover_image"] = l.CoverImage
	l.fieldMap["content_md"] = l.ContentMd
	l.fieldMap["top"] = l.Top
	l.fieldMap["type_id"] = l.TypeID
	l.fieldMap["tag_ids"] = l.TagIds
	l.fieldMap["notes_status"] = l.NotesStatus
	l.fieldMap["is_recommended"] = l.IsRecommended
	l.fieldMap["is_original"] = l.IsOriginal
	l.fieldMap["description"] = l.Description
	l.fieldMap["keywords"] = l.Keywords
	l.fieldMap["create_time"] = l.CreateTime
}

func (l ldNote) clone(db *gorm.DB) ldNote {
	l.ldNoteDo.ReplaceConnPool(db.Statement.ConnPool)
	return l
}

func (l ldNote) replaceDB(db *gorm.DB) ldNote {
	l.ldNoteDo.ReplaceDB(db)
	return l
}

type ldNoteDo struct{ gen.DO }

func (l ldNoteDo) Debug() *ldNoteDo {
	return l.withDO(l.DO.Debug())
}

func (l ldNoteDo) WithContext(ctx context.Context) *ldNoteDo {
	return l.withDO(l.DO.WithContext(ctx))
}

func (l ldNoteDo) ReadDB() *ldNoteDo {
	return l.Clauses(dbresolver.Read)
}

func (l ldNoteDo) WriteDB() *ldNoteDo {
	return l.Clauses(dbresolver.Write)
}

func (l ldNoteDo) Session(config *gorm.Session) *ldNoteDo {
	return l.withDO(l.DO.Session(config))
}

func (l ldNoteDo) Clauses(conds ...clause.Expression) *ldNoteDo {
	return l.withDO(l.DO.Clauses(conds...))
}

func (l ldNoteDo) Returning(value interface{}, columns ...string) *ldNoteDo {
	return l.withDO(l.DO.Returning(value, columns...))
}

func (l ldNoteDo) Not(conds ...gen.Condition) *ldNoteDo {
	return l.withDO(l.DO.Not(conds...))
}

func (l ldNoteDo) Or(conds ...gen.Condition) *ldNoteDo {
	return l.withDO(l.DO.Or(conds...))
}

func (l ldNoteDo) Select(conds ...field.Expr) *ldNoteDo {
	return l.withDO(l.DO.Select(conds...))
}

func (l ldNoteDo) Where(conds ...gen.Condition) *ldNoteDo {
	return l.withDO(l.DO.Where(conds...))
}

func (l ldNoteDo) Order(conds ...field.Expr) *ldNoteDo {
	return l.withDO(l.DO.Order(conds...))
}

func (l ldNoteDo) Distinct(cols ...field.Expr) *ldNoteDo {
	return l.withDO(l.DO.Distinct(cols...))
}

func (l ldNoteDo) Omit(cols ...field.Expr) *ldNoteDo {
	return l.withDO(l.DO.Omit(cols...))
}

func (l ldNoteDo) Join(table schema.Tabler, on ...field.Expr) *ldNoteDo {
	return l.withDO(l.DO.Join(table, on...))
}

func (l ldNoteDo) LeftJoin(table schema.Tabler, on ...field.Expr) *ldNoteDo {
	return l.withDO(l.DO.LeftJoin(table, on...))
}

func (l ldNoteDo) RightJoin(table schema.Tabler, on ...field.Expr) *ldNoteDo {
	return l.withDO(l.DO.RightJoin(table, on...))
}

func (l ldNoteDo) Group(cols ...field.Expr) *ldNoteDo {
	return l.withDO(l.DO.Group(cols...))
}

func (l ldNoteDo) Having(conds ...gen.Condition) *ldNoteDo {
	return l.withDO(l.DO.Having(conds...))
}

func (l ldNoteDo) Limit(limit int) *ldNoteDo {
	return l.withDO(l.DO.Limit(limit))
}

func (l ldNoteDo) Offset(offset int) *ldNoteDo {
	return l.withDO(l.DO.Offset(offset))
}

func (l ldNoteDo) Scopes(funcs ...func(gen.Dao) gen.Dao) *ldNoteDo {
	return l.withDO(l.DO.Scopes(funcs...))
}

func (l ldNoteDo) Unscoped() *ldNoteDo {
	return l.withDO(l.DO.Unscoped())
}

func (l ldNoteDo) Create(values ...*models.LdNote) error {
	if len(values) == 0 {
		return nil
	}
	return l.DO.Create(values)
}

func (l ldNoteDo) CreateInBatches(values []*models.LdNote, batchSize int) error {
	return l.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (l ldNoteDo) Save(values ...*models.LdNote) error {
	if len(values) == 0 {
		return nil
	}
	return l.DO.Save(values)
}

func (l ldNoteDo) First() (*models.LdNote, error) {
	if result, err := l.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*models.LdNote), nil
	}
}

func (l ldNoteDo) Take() (*models.LdNote, error) {
	if result, err := l.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*models.LdNote), nil
	}
}

func (l ldNoteDo) Last() (*models.LdNote, error) {
	if result, err := l.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*models.LdNote), nil
	}
}

func (l ldNoteDo) Find() ([]*models.LdNote, error) {
	result, err := l.DO.Find()
	return result.([]*models.LdNote), err
}

func (l ldNoteDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*models.LdNote, err error) {
	buf := make([]*models.LdNote, 0, batchSize)
	err = l.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (l ldNoteDo) FindInBatches(result *[]*models.LdNote, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return l.DO.FindInBatches(result, batchSize, fc)
}

func (l ldNoteDo) Attrs(attrs ...field.AssignExpr) *ldNoteDo {
	return l.withDO(l.DO.Attrs(attrs...))
}

func (l ldNoteDo) Assign(attrs ...field.AssignExpr) *ldNoteDo {
	return l.withDO(l.DO.Assign(attrs...))
}

func (l ldNoteDo) Joins(fields ...field.RelationField) *ldNoteDo {
	for _, _f := range fields {
		l = *l.withDO(l.DO.Joins(_f))
	}
	return &l
}

func (l ldNoteDo) Preload(fields ...field.RelationField) *ldNoteDo {
	for _, _f := range fields {
		l = *l.withDO(l.DO.Preload(_f))
	}
	return &l
}

func (l ldNoteDo) FirstOrInit() (*models.LdNote, error) {
	if result, err := l.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*models.LdNote), nil
	}
}

func (l ldNoteDo) FirstOrCreate() (*models.LdNote, error) {
	if result, err := l.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*models.LdNote), nil
	}
}

func (l ldNoteDo) FindByPage(offset int, limit int) (result []*models.LdNote, count int64, err error) {
	result, err = l.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = l.Offset(-1).Limit(-1).Count()
	return
}

func (l ldNoteDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = l.Count()
	if err != nil {
		return
	}

	err = l.Offset(offset).Limit(limit).Scan(result)
	return
}

func (l ldNoteDo) Scan(result interface{}) (err error) {
	return l.DO.Scan(result)
}

func (l ldNoteDo) Delete(models ...*models.LdNote) (result gen.ResultInfo, err error) {
	return l.DO.Delete(models)
}

func (l *ldNoteDo) withDO(do gen.Dao) *ldNoteDo {
	l.DO = *do.(*gen.DO)
	return l
}
